const router = require("express").Router();
let Exercise = require("../models/excercise.model");

router.route('/').get((req, res)=>{
    console.log("Requesting for get-data of Excercise");
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error = '+err))
});

router.route('/add').post((req, res) =>{
    console.log("Adding the user data-excercise");
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    console.log(req.body);
    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });
    newExercise.save()
    .then(()=>{ res.json("Exercise Added!")})
    .catch(err => res.status(400).json('Error = '+err))


})

router.route("/:id").get((req, res) =>{
    console.log("Getting data by id");
    
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json("Error = "+err))
})

router.route("/:id").delete((req, res) =>{
    console.log("Deleting data by id");
    
    Exercise.findByIdAndDelete(req.params.id)
    .then(exercise => res.json('Exercise deleted'))
    .catch(err => res.status(400).json("Error = "+err))
})
router.route("/update/:id").post((req, res) =>{
    console.log("Updating data by id");
    
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(()=> res.json("Exercise Updated"))
        .catch(err => res.status(400).json("Error = "+err))
    })
    .catch(err => res.status(400).json("Error = "+err))
})



module.exports = router;