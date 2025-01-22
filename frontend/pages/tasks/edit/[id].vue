<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold text-center mb-6">Edit Task</h1>
  
      <!-- Edit Task Form -->
      <form @submit.prevent="updateTask" class="max-w-md mx-auto">
        <input
          v-model="task.name"
          type="text"
          placeholder="Task Name"
          class="w-full p-2 border rounded-lg mb-2"
          required
        />
        <textarea
          v-model="task.description"
          placeholder="Task Description"
          class="w-full p-2 border rounded-lg mb-2"
        ></textarea>
        <div class="flex items-center mb-4">
          <input
            v-model="task.completed"
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
            Update Task
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  
  const route = useRoute();
  const task = ref({
    id: '',
    name: '',
    description: '',
    completed: false,
  });
  
  // Fetch the task to edit
  onMounted(async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/tasks/${route.params.id}`);
      task.value = response.data;
    } catch (error) {
      console.error('Error fetching task:', error);
    }
  });
  
  // Update the task
  const updateTask = async () => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${task.value._id}`, task.value);
      // Redirect to the home page after updating the task
      navigateTo('/');
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };
  </script>