const express = require("express");
const connectDB = require("./lib/db");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
//Routes imports
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");


dotenv.config();

const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Connect to DB
connectDB();

//Routes
app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);


//Start Server 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));