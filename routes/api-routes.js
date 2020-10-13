// require models
const db = require("../models");

// export routes to express
module.exports = function (app) {

  // get last workout
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      }).catch(err => {
        res.json(err);
        console.log(err);
      })
  })

  // add exercise to workout
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOne({ _id: req.params.id })
      .then(dbWorkout => {
        dbWorkout.exercises.push(req.body);
        return dbWorkout.save();
      }).then(dbWorkout => {
        res.json(dbWorkout);
      }).catch(err => {
        res.json(err);
        console.log(err);
      })
  })

  // create new workout
  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      }).catch(err => {
        res.json(err);
        console.log(err);
      })
  })

  // get all workouts
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      }).catch(err => {
        res.json(err);
        console.log(err);
      })
  })
}

