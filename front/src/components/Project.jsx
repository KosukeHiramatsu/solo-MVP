import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Project({ projectID, setProjectID }) {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(null);
  const [newTasks, setNewTasks] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/Tasks/${projectID}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTasks(data.data);
      } catch (error) {
        console.error("Failed: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const postFetchData = async () => {
    setLoading(true);
    const data = {};
    try {
      const response = await fetch("/api/Tasks", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      //   setTasks(data.data);
    } catch (error) {
      console.error("Failed: ", error);
    } finally {
      setLoading(false);
    }
  };
  postFetchData();

  const editTask = () => {};
  const addtask = () => {
    setNewTasks([
      ...newTasks,
      {
        place_name: place_name,
        type: type,
        detail: detail,
        item: item,
        URL_photo: URL_photo,
        URL_home: URL_home,
        URL_googlemap: URL_googlemap,
        arrive_time: arrive_time,
        previous_place_id,
        related_project_id,
      },
    ]);
    table.text("item");
    table.string("URL_photo", 2048);
    table.string("URL_home", 2048);
    table.string("URL_googlemap", 2048);
    table.datetime("arrive_time").notNullable();
    table.datetime("departure_time").notNullable();
    table.integer("previous_place_id");
    table.integer("related_project_id");
  };

  return (
    <div>
      <ul role="list" class="divide-y divide-white/5">
        {loading && <p>Loading...</p>}
        {tasks !== null ? (
          tasks.map((task) => (
            <li class="flex justify-between gap-x-6 py-5">
              <button onClick={editTask}>
                <div class="min-w-0 flex-auto">
                  <p class="text-sm/6 font-semibold text-white">
                    {task.place_name}
                  </p>
                  <p class="mt-1 truncate text-xs/5 text-gray-400">
                    {task.detail}
                  </p>
                </div>
                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p>{task.arrive_time}</p>
                  <p>{task.departure_time}</p>
                  <p class="mt-1 text-xs/5 text-gray-400">
                    Last Edit{" "}
                    <time datetime="2023-01-23T13:23Z">
                      {task.previous_place_id}
                    </time>
                  </p>
                </div>
              </button>
            </li>
          ))
        ) : (
          <p>There is no tasks</p>
        )}
      </ul>
      <div>
        <button onClick={addtask}>addtasks</button>
      </div>
    </div>
  );
}
