<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold text-center mb-6">Add Task</h1>
  
      <!-- Add Task Form -->
      <form @submit.prevent="createTask" class="max-w-md mx-auto">
        <input
          v-model="newTask.name"
          type="text"
          placeholder="Task Name"
          class="w-full p-2 border rounded-lg mb-2"
          required
        />
        <textarea
          v-model="newTask.description"
          placeholder="Task Description"
          class="w-full p-2 border rounded-lg mb-2"
        ></textarea>
        <div class="flex items-center mb-4">
          <input
            v-model="newTask.completed"
            type="checkbox"
            class="mr-2"
          />
          <label>Completed</label>
        </div>
        <div class="flex justify-end space-x-2">
          <NuxtLink
            to="/"
            class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </NuxtLink>
          <button
            type="submit"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  
  const newTask = ref({
    name: '',
    description: '',
    completed: false,
  });
  
  // Create a new task
  const createTask = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/tasks', newTask.value);
      // Redirect to the home page after creating the task
      navigateTo('/');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };
  </script>