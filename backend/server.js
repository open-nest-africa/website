require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./src/config/database");
const authRoutes = require("./src/routes/authRoutes");
const usersRoutes = require("./src/routes/usersRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.VITE_PORT || 4000;

connectDB();

app.use("/auth", authRoutes);
app.use("/user", usersRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
