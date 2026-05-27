import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function AddTask({
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

  const insertItem = () => {
  const insertIndex = 2; 
  const newItem = 'C';

  setItems([
    ...items.slice(0, insertIndex),
    newItem,
    ...items.slice(insertIndex)
  ]);
};
  return (
    <>
      {addingTaskId === taskID ? (
        <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-gray-500 hover:bg-gray-750 text-left w-full">
          <div className="flex justify-between items-start gap-4">
            <div className="text-xs text-gray-300 font-mono text-right flex flex-col items-center">
              <input
                type="date"
                className="bg-gray-900 text-white border border-gray-700 rounded"
              />
              <input
                type="time"
                className="bg-gray-900 text-white border border-gray-700 rounded"
              />
              <p className="text-xs text-gray-500 my-0.5">↓</p>
              <input
                type="date"
                className="bg-gray-900 text-white border border-gray-700 rounded"
              />
              <input
                type="time"
                className="bg-gray-900 text-white border border-gray-700 rounded"
              />
            </div>

            <div className="flex-1">
              <input
                type="text"
                name="name"
            required
            value={formData.name}
            onChange={handleChange}
                placeholder="タイトル"
                className="flex px-1 py-1 bg-gray-900 text-white border border-gray-700 rounded font-bold"
              />
              <textarea
                placeholder="詳細"
                rows={3}
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
                  addtask(taskID);
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
                type="date"
                className="bg-gray-900 text-white border border-gray-700 rounded"
              />
              <input
                type="time"
                className="bg-gray-900 text-white border border-gray-700 rounded"
              />
              <p className="text-xs text-gray-500 my-0.5">↓</p>
              <input
                type="date"
                className="bg-gray-900 text-white border border-gray-700 rounded"
              />
              <input
                type="time"
                className="bg-gray-900 text-white border border-gray-700 rounded"
              />
            </div>

            <div className="flex-1">
              {/* 移動手段のラジオボタン */}
              <h3 class="mb-4 font-semibold text-heading">Identification</h3>
              <ul class="items-center w-full text-xs font-medium text-heading bg-neutral-primary-soft border border-default rounded-lg sm:flex">
                <li class="w-full border-b border-default sm:border-b-0 sm:border-r">
                  <div class="flex items-center ps-3">
                    <input
                      id="horizontal-list-radio-license"
                      type="radio"
                      value=""
                      name="list-radio"
                      class="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                    />
                    <label
                      for="horizontal-list-radio-license"
                      class="w-full py-3 select-none ms-2 text-xs font-medium text-heading"
                    >
                      Driver License{" "}
                    </label>
                  </div>
                </li>
                <li class="w-full border-b border-default sm:border-b-0 sm:border-r">
                  <div class="flex items-center ps-3">
                    <input
                      id="horizontal-list-radio-id"
                      type="radio"
                      value=""
                      name="list-radio"
                      class="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                    />
                    <label
                      for="horizontal-list-radio-id"
                      class="w-full py-3 select-none ms-2 text-sm font-medium text-heading"
                    >
                      State ID
                    </label>
                  </div>
                </li>
                <li class="w-full border-b border-default sm:border-b-0 sm:border-r">
                  <div class="flex items-center ps-3">
                    <input
                      id="horizontal-list-radio-military"
                      type="radio"
                      value=""
                      name="list-radio"
                      class="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                    />
                    <label
                      for="horizontal-list-radio-military"
                      class="w-full py-3 select-none ms-2 text-sm font-medium text-heading"
                    >
                      US Military
                    </label>
                  </div>
                </li>
                <li class="w-full">
                  <div class="flex items-center ps-3">
                    <input
                      id="horizontal-list-radio-passport"
                      type="radio"
                      value=""
                      name="list-radio"
                      class="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                    />
                    <label
                      for="horizontal-list-radio-passport"
                      class="w-full py-3 select-none ms-2 text-sm font-medium text-heading"
                    >
                      US Passport
                    </label>
                  </div>
                </li>
              </ul>

              <input
                type="text"
                placeholder="タイトル"
                className="flex px-1 py-1 bg-gray-900 text-white border border-gray-700 rounded font-bold"
              />
              <textarea
                placeholder="詳細"
                rows={3}
                className="w-full text-xs px-1 py-1 bg-gray-900 text-white border border-gray-700 rounded line-clamp-2"
              />
            </div>
            <div className="flex justify-end items-end gap-2">
              <button
                onClick={setAddingMovementId(null), setAddingTaskId(null)}
                className="bg-gray-600 text-gray-400 hover:text-white px-1 py-1 text-xs rounded transition-colors"
              >
                キャンセル
              </button>
              <button
                onClick={() => {
                  addtask(taskID);
                  setAddingTaskId(null);
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
                onClick={()=>{setAddingMovementId(null); setAddingTaskId(null); setAddingTaskId(taskID)}}
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full border border-gray-800 flex items-center gap-1 transform scale-90 hover:scale-100 transition-transform"
          >
            <span>＋イベントを追加</span>
          </button>
          <button
                onClick={()=>{setAddingMovementId(null); setAddingTaskId(null); setAddingMovementId(taskID)}}
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full border border-gray-800 flex items-center gap-1 transform scale-90 hover:scale-100 transition-transform"
          >
            <span>＋移動を追加</span>
          </button>
        </div>
      )}
    </>
  );
}
