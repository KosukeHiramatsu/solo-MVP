import React, { useState } from "react";

export function TypeSelector({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({ ...formData, type: e.target.value });
  };

  const options = ["car", "publicTransport", "walk", "flight"];

  return (
    <div className="mb-4">
      <div className="flex p-1 space-x-1 bg-gray-900 rounded-lg border border-gray-700">
        {options.map((option) => {
          const isSelected = formData.type === option;

          return (
            <label
              key={option}
              className={`
                flex-1 cursor-pointer text-center px-3 py-1.5 rounded-md text-xs font-bold transition-all
                ${
                  isSelected
                    ? "bg-gray-700 text-white shadow-sm ring-1 ring-white/10" // 選択中
                    : "text-gray-500 hover:text-gray-300 hover:bg-gray-800" // 未選択
                }
              `}
            >
              {/* 実際のラジオボタンは hidden で隠す */}
              <input
                type="radio"
                name="type"
                value={option}
                checked={isSelected}
                onChange={handleChange}
                className="hidden"
              />
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
}
