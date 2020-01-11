const router = require('express').Router();
let User = require ('../models/user.models');

router.route('/').get((req, res) => {
    User.find()
    .then(users=> res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newuser = new User({username});

    newuser.save()
        .then( () => res.json('User added!'))
        .catch( err => res.status(400).json('Error: ' + err));
});

module.exports = router;

//in the fullscale app, we would have update, delete, etc
// i will be doing that in the exercises.js file. and marlk them correctly