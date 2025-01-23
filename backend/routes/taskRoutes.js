const express = require("express");
const router = express.Router();
const { getTasks, getTask, createTask, updateTask, deleteTask, getCompletedTasks, toggleCompletion } = require("../controllers/taskController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

//Protected routes
router.use(authMiddleware);

//Get completed tasks
router.get("/completed", getCompletedTasks);

//Toggle task completion
router.put("/:id/complete", toggleCompletion);

//Get all tasks
router.get("/", getTasks);

//Get single task
router.get("/:id", getTask);

//Create a task
router.post("/", createTask);

//Update a task
router.put("/:id", updateTask);

//Delete a task
router.delete("/:id", deleteTask);

//Admin routes

module.exports = router;