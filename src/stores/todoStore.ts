import { defineStore } from "pinia";
import { ref } from "vue";

// Define Task Interface
interface Task {
  text: string;
  completed: boolean;
}

// Pinia Store
export const useTodoStore = defineStore("todo", () => {
  const tasks = ref<Task[]>([]);
  const newTask = ref<string>("");

  // Add a task
  const addTask = () => {
    if (newTask.value.trim() !== "") {
      tasks.value.push({ text: newTask.value, completed: false });
      newTask.value = "";
    }
  };

  // Remove a task
  const removeTask = (index: number) => {
    tasks.value.splice(index, 1);
  };

  // Toggle task completion
  const toggleTask = (index: number) => {
    tasks.value[index].completed = !tasks.value[index].completed;
  };

  return { tasks, newTask, addTask, removeTask, toggleTask };
});
