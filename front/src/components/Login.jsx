import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="mb-8">
        <img
          src={logo}
          alt="Journey Logger Logo"
          className="h-40 w-auto object-contain"
        />
      </div>

      <div className="flex flex-row items-end gap-4">
        <input
          id="username"
          name="myInput"
          placeholder="ユーザー名を入力"
          className="w-64 border border-gray-300 rounded-md px-4 py-2 "
        />

        <button
          onClick={() => navigate("/home")}
          className="h-10 px-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
