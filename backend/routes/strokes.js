const express = require("express");
const Stroke = require("../models/Stroke");
const router = express.Router();

// Save stroke data
router.post("/save", async (req, res) => {
    try {
        const newStroke = new Stroke({ strokes: req.body.strokes });
        await newStroke.save();
        res.status(201).json({ message: "Strokes saved successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Fetch all saved strokes
router.get("/", async (req, res) => {
    try {
        const strokes = await Stroke.find().sort({ createdAt: -1 });
        res.json(strokes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
