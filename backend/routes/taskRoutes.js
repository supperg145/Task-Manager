const express = require("express");
const router = express.Router();
const { getTasks, getTask, createTask, updateTask, deleteTask } = require("../controllers/taskController");

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

module.exports = router;