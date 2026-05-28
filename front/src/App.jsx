import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Project } from "./components/Project";
import { NavbarDefault } from "./components/Navbar";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [projectID, setProjectID] = useState(null);
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <NavbarDefault />

        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={<Home setProjectID={setProjectID} />}
            />
            <Route
              path="/project"
              element={
                <Project projectID={projectID} setProjectID={setProjectID} />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
