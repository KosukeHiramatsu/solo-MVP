import React, { useState } from "react";

export function NavbarDefault() {
  return (
    <nav className="bg-white/50 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-10">
          {/* 左側：ロゴ */}
          <div className="text-m font-bold text-gray-800">MyLogo</div>

          {/* 右側：メニュー */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
