const User = require('../../db').User;
const route = require('express').Router();

route.post('/signup', (req, res) => {

    console.log("Signup Request: ",req.body);

   User.create({
       name: req.body.name,
       email: req.body.email,
       contact: req.body.contact,
       college: req.body.college,
       address: req.body.address,
       password: req.body.password
   }).then((user) => {
       res.status(201).send(user)
   }).catch((err) => {
       console.log(err);
       res.status(501).send({
           error: "Could not add new user"
       })
   })
});

exports = module.exports = route;