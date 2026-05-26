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
    <div className="bg-bg-[#F4F1EA]">
      <NavbarDefault />
      <div className="Ap ">
        <BrowserRouter>
          <div className="App">
            <Link to="/login">login</Link>
            {/* <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
        <Link to="/page3">Page3</Link> */
            /* <br /> */}
            <Routes>
              <Route path="/login" element={<Login />} />
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
              {/* <Route path="/projects/:id" element={<ProjectEdit />} /> */}
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
