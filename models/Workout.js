// dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const WorkoutSchema = new Schema({

  day: {
    type: Date,
    default: Date.now
  },

  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Exercise name is required."
      },
      type: {
        type: String,
        trim: true,
        required: "Exercise type is required."
      },
      duration: {
        type: Number,
        required: "Exercise duration is requred."
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
      distance: {
        type: Number
      }
    }
  ]
});

// export schema as model
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;