const router = require('express').Router();
let Exercise = require ('../models/exercise.model');

router.route('/').get((req, res) => {
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description, 
        duration, 
        date,
    });

    newExercise.save()
    .then(()=> res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: '+ err));
});


/* Now we will add a bunch more routes, needed for the full scale 
production of this app.*/

/*
==GET ROUTE== 
The :id is like a variable and created by mongodb. 
this will return info just about the specific exercise and return as 
json or show an error
*/
router.route('/:id').get((req,res) => {
    Exercise.findById(req.params.id)
    .then( exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});




/*
==DELETE ROUTE== 
again, you input a specific exercise id, and it deletes it from the 
mongodb database. 
after it's deleted, you get a message saying that it's been deleted.
*/
router.route('/:id').delete((req,res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Exercise deleted. AND IM IN EXCERCISE.JS'))
    .catch(err => res.status(400).json('Error: ' + err));
})



/*
==UPDATE ROUTE==
you have the url, and the url specifies an id
you pass in the parameter from the url 
then you get the exercises, 
    and update the fields
this is then saved
    after being saved, you get the respective message or an error msg
*/
router.route('/update/:id').post((req,res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err)); 
        })
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;