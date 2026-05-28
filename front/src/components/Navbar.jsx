import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export function NavbarDefault() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Journey Logger Logo"
              className="w-8 h-8 object-contain"
            />
            <div className="text-sm font-bold text-gray-800 font-['Montserrat',_sans-serif]">
              Journey Logger
            </div>
          </div>
          <div className="text-sm flex space-x-4">
            <button
              className="text-gray-600 hover:text-blue-500"
              onClick={() => navigate("/home")}
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
