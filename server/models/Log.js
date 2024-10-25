const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  habitId: { type: mongoose.Schema.Types.ObjectId, ref: "Habit" },
  date: { type: Date, required: true },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Log", logSchema);
