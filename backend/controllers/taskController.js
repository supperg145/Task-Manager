const Task = require("../models/Task");

//Get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Get single task
const getTask = async (req, res) => {
    try {
        const  { id } = req.params;
        const task = await Task.findById(id);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
//Create a task
const createTask = async (req, res) => {
    const { name, description, completed } = req.body;

    try {
        const task = await Task.create({ name, description, completed });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Update a task
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//Delete a task
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };