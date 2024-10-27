const express = require("express");
const Log = require("../models/Log");
const router = express.Router();

// POST /api/logs - Log habit completion
router.post("/", async (req, res) => {
  const log = new Log(req.body);
  await log.save();
  res.json(log);
});

// GET /api/logs/:habitId - Get logs for a specific habit
router.get("/:habitId", async (req, res) => {
  const logs = await Log.find({ habitId: req.params.habitId });
  res.json(logs);
});

module.exports = router;
