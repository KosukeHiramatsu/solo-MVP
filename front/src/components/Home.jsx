import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Home({ setProjectID }) {
  const navigate = useNavigate();

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

  const addProject = () => {
    console.log(projects);
  };

  return (
    <div>
      <ul role="list" className="divide-y divide-white/5">
        {loading && <p>Loading...</p>}
        {projects !== null ? (
          projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-gray-500 hover:bg-gray-750 text-left w-full group relative"
            >
              <button
                onClick={() => {
                  setProjectID(project.id);
                  navigate("/project");
                }}
              >
                <div className="min-w-0 flex-auto flex text-left gap-4">
                  <div className="text-xs text-gray-300 font-mono text-right flex flex-col items-center">
                    <h2>{project.date_of_created?.slice(5, 10)} </h2>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm/6 font-semibold text-white">
                      {project.name}
                    </p>
                    <p className="mt-1 truncate text-xs/5 text-gray-400 line-clamp-2">
                      {project.detail}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p>{project.createdBy}</p>
                </div>
              </button>
            </div>
          ))
        ) : (
          <p>There is no projects</p>
        )}
      </ul>
      <div>
        <button onClick={addProject}>addProjects</button>
      </div>
    </div>
  );
}
