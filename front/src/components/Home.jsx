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
      <ul role="list" class="divide-y divide-white/5">
        {loading && <p>Loading...</p>}
        {projects !== null ? (
          projects.map((project) => (
            <li class="flex justify-between gap-x-6 py-5">
              <button
                onClick={() => {
                  setProjectID(project.id);
                  navigate("/project");
                }}
              >
                <div class="min-w-0 flex-auto">
                  <p class="text-sm/6 font-semibold text-white">
                    {project.name}
                  </p>
                  <p class="mt-1 truncate text-xs/5 text-gray-400">
                    {project.detail}
                  </p>
                </div>
                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p>{project.date_of_created}</p>
                  <p>{project.date_of_lastEdit}</p>
                  <p>{project.createdBy}</p>
                  <p class="mt-1 text-xs/5 text-gray-400">
                    Last Edit{" "}
                    <time datetime="2023-01-23T13:23Z">
                      {project.date_of_lastEdit}
                    </time>
                  </p>
                </div>
              </button>
            </li>
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
