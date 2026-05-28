import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AddTask } from "./AddTask";

export function Project({ projectID, setProjectID }) {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(null);
  const [addingTaskId, setAddingTaskId] = useState(null);
  const [addingMovementId, setAddingMovementId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    IsMovement: "",
    type: "default",
    name: "",
    detail: "",
    arrive_time: "",
    departure_time: "",
    related_project_id: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/tasks/${projectID}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const tasksData = await response.json();
        setTasks(tasksData.data.sort((a, b) => a.sequence - b.sequence));
      } catch (error) {
        console.error("Failed: ", error);
        alert("データの保存に失敗しました。通信環境などを確認してください。");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [projectID]);

  const addtask = (targetId) => {
    console.log(`ID: ${targetId} の次に追加する処理`);
  };

  const editTask = () => {};

  const upsertTasks = async () => {
    const sendingTasks = tasks.map((task, index) => {
      return {
        ...task,
        sequence: index,
        related_project_id: projectID,
      };
    });
    console.log(JSON.stringify(sendingTasks));
    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendingTasks),
      });
      if (!response.ok) {
        throw new Error(`サーバーエラーが発生しました: ${response.status}`);
      }
      const tasksData = await response.json();
      console.log(tasksData.data);
      setTasks(tasksData.data.data.sort((a, b) => a.sequence - b.sequence));
      alert("データの保存が完了しました！");
    } catch (error) {
      console.error("保存失敗:", error);
      alert("データの保存に失敗しました。通信環境などを確認してください。");
    }
  };

  return (
    <div className="mx-auto p-4">
      {loading && <p className="text-center text-gray-400 py-4">Loading...</p>}

      {tasks && tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div key={task.id} className="group relative">
            {task.IsMovement ? (
              <div className="flex flex-col items-center justify-center">
                <div className="h-1 w-0.5 bg-gray-600"></div>
                <div className="bg-gray-800 text-gray-400 text-xs px-4 py-1.5 rounded-full border border-gray-700 flex gap-3">
                  <span className="font-semibold text-white">{task.type}</span>
                  <span>
                    {task.arrive_time?.slice(11, 16)} -{" "}
                    {task.departure_time?.slice(11, 16)}
                  </span>
                </div>
                <div className="h-1 w-0.5 bg-gray-600"></div>
              </div>
            ) : (
              <div
                onClick={editTask}
                className="bg-gray-800 rounded-xl p-3 border border-gray-700 hover:border-gray-500 hover:bg-gray-750 text-left w-full"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="text-xs text-gray-300 font-mono text-right flex flex-col items-center">
                    <h2>{task.arrive_time?.slice(5, 10)} </h2>
                    <p>{task.arrive_time?.slice(11, 16)}</p>
                    <p className="text-xs text-gray-500 my-0.5">↓</p>
                    <p>{task.departure_time?.slice(11, 16)}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white">{task.name}</h3>
                    <p className="text-xs text-gray-400 line-clamp-2">
                      {task.detail}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <AddTask
              tasks={tasks}
              setTasks={setTasks}
              taskID={task.id}
              formData={formData}
              setFormData={setFormData}
              addingTaskId={addingTaskId}
              addingMovementId={addingMovementId}
              setAddingMovementId={setAddingMovementId}
              setAddingTaskId={setAddingTaskId}
            />
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 py-10">タスクがありません</p>
      )}

      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={upsertTasks}
          className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-3 px-5 rounded-full shadow-lg border border-gray-800 flex items-center gap-1 transform hover:scale-105 transition-transform"
        >
          保存
        </button>
      </div>
    </div>
  );
}
