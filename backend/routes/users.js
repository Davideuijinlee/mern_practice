const router = require('express').Router();
//needed to create the route
let User = require('../models/user.model');
//mongoose model we created

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
        //user.find is a mongoose method - get a list of mongo db - returned in json format. return users you got from database
});
//first endpoint that handles HTTP GET requests

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
//handles http post requests
//new username is part of request body
//save method saves new user to the database


module.exports = router;
//exporting router