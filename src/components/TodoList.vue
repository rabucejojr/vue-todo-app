<script setup lang="ts">
import { useTodoStore } from "../stores/todoStore";

// Store
const todoStore = useTodoStore();
</script>

<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
    <h2 class="text-xl font-bold mb-4">To-Do List</h2>

    <div class="flex mb-4">
      <input
        v-model="todoStore.newTask"
        type="text"
        placeholder="Add a task..."
        class="w-full p-2 border rounded-l-md"
      />
      <button @click="todoStore.addTask" class="bg-blue-500 text-white px-4 rounded-r-md">
        Add
      </button>
    </div>

    <ul>
      <li
        v-for="(task, index) in todoStore.tasks"
        :key="index"
        class="flex justify-between items-center p-2 border-b"
      >
        <span
          :class="{ 'line-through text-gray-500': task.completed }"
          @click="todoStore.toggleTask(index)"
          class="cursor-pointer"
        >
          {{ task.text }}
        </span>
        <button @click="todoStore.removeTask(index)" class="text-red-500">❌</button>
      </li>
    </ul>
  </div>
</template>
