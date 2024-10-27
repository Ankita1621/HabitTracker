const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

connectDB();
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/habits", require("./routes/habits"));
app.use("/api/logs", require("./routes/logs"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));