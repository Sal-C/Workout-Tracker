const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  
  exercise: [{
    name: {
      type: String,
      trim: true,
      required: "required"
    },
    type: {
      type: String,
      trim: true,
      required: "required"
    },
    duration: {
      type: Number,
      required: "required"
    },
    weight: Number,
    sets: Number,
    reps: Number,
    distance: Number
  }]
  
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
