const express = require("express");
const Habit = require("../models/Habit");
const router = express.Router();

// POST /api/habits - Create a new habit
router.post("/", async (req, res) => {
  const newHabit = new Habit(req.body);
  await newHabit.save();
  res.json(newHabit);
});

// GET /api/habits - Get all habits
router.get("/", async (req, res) => {
  const habits = await Habit.find();
  res.json(habits);
});

// DELETE /api/habits/:id - Delete a habit
router.delete("/:id", async (req, res) => {
  await Habit.findByIdAndDelete(req.params.id);
  res.json({ message: "Habit deleted" });
});

module.exports = router;
