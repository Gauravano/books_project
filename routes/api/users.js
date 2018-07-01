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

route.post('/login', (req, res) => {

    console.log("Login Request: ",req.body);

    User.find({
        where: {
            email: req.body.email
        }
    }).then((user) => {
        if(!user){
            return res.status(404).send();
        } else{
            if(user.password === req.body.password){
                return res.status(201).send(user);
            }else{
                return res.status(400).send({
                    message: "Please enter correct credentials!"
                });
            }

        }

    }).catch((err) => {
        console.log(err);
        res.status(501).send({
            error: "Could not login!"
        })
    })
});

exports = module.exports = route;