const express = require("express");
const connectDB = require("./lib/db");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");

dotenv.config();

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//Connect to DB
connectDB();

//Routes
app.use("/api/tasks", taskRoutes);

//Start Server 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));