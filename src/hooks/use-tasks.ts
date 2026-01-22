import useLocalStorage from "use-local-storage";
import { TASKS_STORAGE_KEY, TaskState, type Task } from "../models/task";
import { useEffect, useState } from "react";
import { delay } from "../utils/delay";

export function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_STORAGE_KEY, []);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadTasks() {
    if (loading) {
      await delay(5000);
      setLoading(false);
    }

    setTasks(tasksData);
  }

  useEffect(() => {
    loadTasks();
  }, [tasksData]);

  return {
    tasks,
    createdTasksCount:
      tasks?.filter((task) => task.state === TaskState.Created).length || 0,
    completedTasksCount: tasks?.filter((task) => task.completed).length || 0,
    loading,
  };
}
