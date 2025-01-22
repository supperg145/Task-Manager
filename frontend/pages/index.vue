<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold text-center mb-6">Task Manager</h1>
      <ul class="space-y-4">
        <li v-for="task in tasks" :key="task.id" class="p-4 bg-white shadow-md rounded-lg">
          <h2 class="text-xl font-semibold">{{ task.title }}</h2>
          <p class="text-gray-600">{{ task.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  
  const tasks = ref([]);
  
  // Fetch tasks from the backend
  onMounted(async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      tasks.value = response.data;
    } catch (error) {
      console.error(error);
    }
  });
  </script>