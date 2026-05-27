import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { TypeSelector } from "./TypeSelector";

export function AddTask({
  tasks,
  setTasks,
  taskID,
  formData,
  setFormData,
  addingMovementId,
  addingTaskId,
  setAddingMovementId,
  setAddingTaskId,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const insertTask = (id, data) => {
    console.log(formData);
    const insertIndex = tasks.findIndex((item) => item.id === id);

    setTasks([
      ...tasks.slice(0, insertIndex + 1),
      data,
      ...tasks.slice(insertIndex + 1),
    ]);
    console.log(tasks);
    setFormData({
      IsMovement: "",
      type: "default",
      name: "",
      detail: "",
      arrive_time: "",
      departure_time: "",
      related_project_id: "",
    });
    console.log(tasks);
  };
  return (
    <>
      {addingTaskId === taskID ? (
        <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-gray-500 hover:bg-gray-750 text-left w-full">
          <div className="flex justify-between items-start gap-4">
            <div className="text-xs text-gray-300 font-mono text-right flex flex-col items-center">
              <input
                type="datetime-local"
                name="arrive_time"
                value={formData.arrive_time}
                onChange={handleChange}
                className="bg-gray-900 text-white border border-gray-700 rounded"
              />
              <p className="text-xs text-gray-500 my-0.5">↓</p>
              <input
                type="datetime-local"
                name="departure_time"
                value={formData.departure_time}
                onChange={handleChange}
                className="bg-gray-900 text-white border border-gray-700 rounded"
              />
            </div>

            <div className="flex-1">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="タイトル"
                className="flex px-1 py-1 bg-gray-900 text-white border border-gray-700 rounded font-bold"
              />
              <textarea
                name="detail"
                placeholder="詳細"
                rows={3}
                value={formData.detail}
                onChange={handleChange}
                className="w-full text-xs px-1 py-1 bg-gray-900 text-white border border-gray-700 rounded line-clamp-2"
              />
            </div>
            <div className="flex justify-end items-end gap-2">
              <button
                onClick={() => setAddingTaskId(null)}
                className="bg-gray-600 text-gray-400 hover:text-white px-1 py-1 text-xs rounded transition-colors"
              >
                キャンセル
              </button>
              <button
                onClick={() => {
                  if (
                    !formData.arrive_time ||
                    !formData.departure_time ||
                    !formData.name
                  ) {
                    alert("必須項目を入力してください。");
                    return;
                  }
                  const newFormData = {
                    ...formData,
                    IsMovement: false,
                  };
                  insertTask(addingTaskId, newFormData);
                  setAddingTaskId(null);
                }}
                className="bg-blue-600 hover:bg-blue-500 text-white px-1 py-1 rounded text-xs font-bold transition-colors"
              >
                追加
              </button>
            </div>
          </div>
        </div>
      ) : addingMovementId === taskID ? (
        <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-gray-500 hover:bg-gray-750 text-left w-full">
          <div className="flex justify-between items-start gap-4">
            <div className="text-xs text-gray-300 font-mono text-right flex flex-col items-center">
              <input
                type="datetime-local"
                name="arrive_time"
                value={formData.arrive_time}
                onChange={handleChange}
                className="bg-gray-900 text-white border border-gray-700 rounded"
              />
              <p className="text-xs text-gray-500 my-0.5 font-bold">↓</p>
              <input
                type="datetime-local"
                name="departure_time"
                value={formData.departure_time}
                onChange={handleChange}
                className="bg-gray-900 text-white border border-gray-700 rounded"
              />
            </div>
            <div className="flex-1">
              <TypeSelector formData={formData} setFormData={setFormData} />
              <textarea
                placeholder="詳細"
                rows={3}
                className="w-full text-xs px-1 py-1 bg-gray-900 text-white border border-gray-700 rounded line-clamp-2"
              />
            </div>
            <div className="flex justify-end items-end gap-2">
              <button
                onClick={() => {
                  setAddingMovementId(null);
                  setAddingTaskId(null);
                }}
                className="bg-gray-600 text-gray-400 hover:text-white px-1 py-1 text-xs rounded transition-colors"
              >
                キャンセル
              </button>
              <button
                onClick={() => {
                  if (
                    !formData.type ||
                    !formData.arrive_time ||
                    !formData.departure_time
                  ) {
                    console.log(formData);

                    alert("必須項目を入力してください。");
                    return;
                  }
                  const newFormData = {
                    ...formData,
                    IsMovement: true,
                  };
                  insertTask(addingTaskId, newFormData);
                  setAddingMovementId(null);
                }}
                className="bg-blue-600 hover:bg-blue-500 text-white px-1 py-1 rounded text-xs font-bold transition-colors"
              >
                追加
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute -bottom-3 left-0 right-0 flex justify-center z-10 opacity-0 group-hover:opacity-100">
          <button
            onClick={() => {
              setAddingMovementId(null);
              setAddingTaskId(null);
              setAddingTaskId(taskID);
            }}
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full border border-gray-800 flex items-center gap-1 transform scale-90 hover:scale-100 transition-transform"
          >
            <span>＋イベントを追加</span>
          </button>
          <button
            onClick={() => {
              setAddingMovementId(null);
              setAddingTaskId(null);
              setAddingMovementId(taskID);
            }}
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full border border-gray-800 flex items-center gap-1 transform scale-90 hover:scale-100 transition-transform"
          >
            <span>＋移動を追加</span>
          </button>
        </div>
      )}
    </>
  );
}
