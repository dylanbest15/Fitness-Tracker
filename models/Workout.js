// dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const WorkoutSchema = new Schema({
  name: {
    type: String
  },
  type: {
    type: String
  },
  weight: {
    type: Number
  },
  sets: {
    type: Number
  },
  reps: {
    type: Number
  },
  duration: {
    type: Number
  },
  distance: {
    type: Number
  }
});

// export schema as model
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;