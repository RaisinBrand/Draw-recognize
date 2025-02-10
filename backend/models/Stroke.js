const mongoose = require('mongoose')

const StrokeSchema = new mongoose.Schema({
    strokes: { type: Array, required: true },  
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Stroke", StrokeSchema);