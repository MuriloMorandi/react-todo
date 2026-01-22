import useLocalStorage from "use-local-storage";
import { TASKS_STORAGE_KEY, TaskState, type Task } from "../models/task";

export function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_STORAGE_KEY, []);

  function prepareTask() {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: "",
        completed: false,
        state: "creating",
      } as Task,
    ]);
  }

  function updateTasks(id: string, payload: { title: string }) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              state: TaskState.Created,
              ...payload,
            }
          : task,
      ),
    );
  }

  function updateTasksStatus(id: string, completed: boolean) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed,
            }
          : task,
      ),
    );
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return { prepareTask, updateTasks, updateTasksStatus, deleteTask };
}
