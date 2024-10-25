const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Ensure this field is in your request
  description: { type: String },
  frequency: { type: String, required: true }, // e.g., 'daily', 'weekly'
  startDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Habit", HabitSchema);
