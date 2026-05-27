import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Project({ projectID, setProjectID }) {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(null);
  const [movements, setMovent] = useState(null);
  const [newTasks, setNewTasks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [IsAdd, setIsAdd] = useState(false);

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
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const postFetchData = async () => {
    setLoading(true);
    const data = {};
    try {
      const response = await fetch(`/api/tasks/${projectID}`, {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      //   setTasks(data.data);
    } catch (error) {
      console.error("Failed: ", error);
    } finally {
      setLoading(false);
    }
  };

  const editTask = () => {};
  const addtask = () => {
    // setNewTasks([
    //   ...newTasks,
    //   {
    //     place_name: place_name,
    //     type: type,
    //     detail: detail,
    //     item: item,
    //     URL_photo: URL_photo,
    //     URL_home: URL_home,
    //     URL_googlemap: URL_googlemap,
    //     arrive_time: arrive_time,
    //     previous_place_id,
    //     related_project_id,
    //   },
    // ]);
    // table.text("item");
    // table.string("URL_photo", 2048);
    // table.string("URL_home", 2048);
    // table.string("URL_googlemap", 2048);
    // table.datetime("arrive_time").notNullable();
    // table.datetime("departure_time").notNullable();
    // table.integer("previous_place_id");
    // table.integer("related_project_id");
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
                  <span className="font-semibold">{task.type}</span>
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
                className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-gray-500 hover:bg-gray-750 text-left w-full"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="text-sm text-gray-300 font-mono text-right flex flex-col items-center">
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
            {/* {IsAdd?(<div className="flex justify-between items-start gap-4">
                  <div className="text-sm text-gray-300 font-mono text-right flex flex-col items-center">
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
                </div>)} */}
            <div className="absolute -bottom-3 left-0 right-0 flex justify-center z-10 opacity-0 group-hover:opacity-100">
              <button
                onClick={() => {
                  (addtask(task.id), setIsTask(true));
                }}
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full shadow-lg border border-gray-800 flex items-center gap-1 transform scale-90 hover:scale-100 transition-transform"
              >
                <span>＋</span>
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 py-10">タスクがありません</p>
      )}

      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={addtask}
          className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full shadow-lg border border-gray-800 flex items-center gap-1 transform scale-90 hover:scale-100 transition-transform"
        >
          保存
        </button>
      </div>
    </div>
  );
}
