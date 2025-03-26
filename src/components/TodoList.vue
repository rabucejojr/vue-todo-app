<script setup lang="ts">
import { ref } from "vue";

// Define Task interface
interface Task {
  text: string;
  completed: boolean;
}

// Use typed refs for better maintainability
const tasks = ref<Task[]>([]);
const newTask = ref<string>("");

// Add a task
const addTask = (): void => {
  const trimmedTask = newTask.value.trim();
  if (trimmedTask !== "") {
    tasks.value.push({ text: trimmedTask, completed: false });
    newTask.value = "";
  }
};

// Remove a task
const removeTask = (index: number): void => {
  tasks.value.splice(index, 1);
};

// Toggle task completion
const toggleTask = (index: number): void => {
  tasks.value[index].completed = !tasks.value[index].completed;
};
</script>

<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
    <h2 class="text-xl font-bold mb-4">To-Do List</h2>

    <!-- Task Input -->
    <div class="flex mb-4">
      <input
        v-model="newTask"
        type="text"
        placeholder="Add a task..."
        class="w-full p-2 border rounded-l-md"
        aria-label="Task input field"
      />
      <button
        @click="addTask"
        class="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 transition"
        :disabled="!newTask.trim()"
        aria-label="Add Task"
      >
        Add
      </button>
    </div>

    <!-- Task List -->
    <ul>
      <li
        v-for="(task, index) in tasks"
        :key="index"
        class="flex justify-between items-center p-2 border-b"
      >
        <span
          :class="{ 'line-through text-gray-500': task.completed }"
          @click="toggleTask(index)"
          class="cursor-pointer select-none"
          aria-label="Toggle task completion"
        >
          {{ task.text }}
        </span>
        <button
          @click="removeTask(index)"
          class="text-red-500 hover:text-red-700 transition"
          aria-label="Remove Task"
        >
          ❌
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Improve button styles */
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
