<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold text-center mb-6">Task Manager</h1>

    <!-- Add Task Button -->
    <div class="text-center">
      <NuxtLink
        to="/tasks/add"
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Task
      </NuxtLink>
    </div>

    <!-- Task List -->
    <ul class="space-y-4">
      <li
        v-for="task in tasks"
        :key="task.id"
        class="p-4 bg-white shadow-md rounded-lg"
      >
        <h2 class="text-xl font-semibold">{{ task.name }}</h2>
        <p class="text-gray-600">{{ task.description }}</p>
        <p class="text-gray-600">
          Completed: {{ task.completed ? "Yes" : "No" }}
        </p>
        <div class="mt-2 space-x-2">
          <NuxtLink
            :to="`/tasks/edit/${task._id}`"
            class="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Edit
          </NuxtLink>
          <button
            @click="deleteTask(task._id)"
            class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from "axios";

const tasks = ref([]);

// Fetch tasks from the backend
onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/tasks");
    tasks.value = response.data;
  } catch (error) {
    console.error(error);
  }
});

// Delete a task
const deleteTask = async (taskId) => {
  try {
    await axios.delete(`http://localhost:5000/api/tasks/${taskId}`);
    tasks.value = tasks.value.filter((task) => task._id !== taskId); // Remove the task from the list
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};
</script>
