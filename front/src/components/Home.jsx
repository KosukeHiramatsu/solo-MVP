import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Home() {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/Projects");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data.data);
      } catch (error) {
        console.error("Failed: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const addProject = () => {};

  return (
    <div>
      <ul>
        {loading && <p>Loading...</p>}
        {projects !== null ? (
          projects.map((project) => (
            <li key={project.id} value={project.id}>
              a
            </li>
          ))
        ) : (
          <p>There is no projects</p>
        )}
      </ul>
      <div>
        <button onClick={addProject}></button>
      </div>
    </div>
  );
}
