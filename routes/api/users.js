const User = require('../../db').User;
const route = require('express').Router();

route.get('/signup', (req, res) => {
console.log("current session", req.session.user);
    if (req.session.user == undefined){
        res.status(200).send("Ok");
    }else {
        res.status(400).send({
          message: "Logout from the current session first. Thank you."
        });
    }
});

route.get('/login', (req, res) => {
console.log("current session", req.session.user);
    if (req.session.user == undefined){
        res.status(200).send("OK");
    }else {
        res.status(400).send({
          message: "Logout from the current session first. Thank you."
        });
    }
});

route.get('/:id', (req,res) => {

  User.find({
    where: {
      id: req.params.id
    }
  }).then((user) => {
    if(user){
      return res.status(200).send(user);
    }else{
      return res.status(400).send({
        message: "No user with this Id found!"
    });
    }
  }).catch((err) => {
    return res.status(500).send({
      message: "Can't fetch at current time!"
  });
  })
});

route.post('/signup', (req, res) => {

   console.log("Signup Request: ",req.body);

    if (req.session.user != undefined ){
        return res.status(400).send({
          message: "Logout from the current session first. Thank you."
        });
    }

    User.find({
      where: {
        email: req.body.email
      }
    }).then((user) => {
      if(user){
        return res.status(406).send({
          message: "User with this email id already exist! "
      });
      }
    })

   User.create({
       name: req.body.name,
       email: req.body.email,
       contact: req.body.contact,
       college: req.body.college,
       address: req.body.address,
       password: req.body.password
   }).then((user) => {
       req.session.user = user;
       res.status(201).send(user);
   }).catch((err) => {
       console.log(err);
       res.status(501).send({
           message: "Could not add new user"
       })
   })
});

route.post('/login', (req, res) => {

    console.log("Login Request: ",req.body);

    if (req.session.user != undefined){
        return res.status(400).send({
          message: "Logout from the current session first. Thank you."
      });
    }

    User.find({
        where: {
            email: req.body.email
        }
    }).then((user) => {
        if(!user){
            return res.status(404).send();
        } else{
            if(user.password === req.body.password){
                req.session.user = user;
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
            message: "Could not login!"
        })
    })
});

route.post('/logout', (req, res) => {

    console.log("Logout Request: ",req.body);

    if(req.session.user){
        req.session.destroy();
        return res.status(200).send({
          message: "successfully logged out!"
        });
    }else{
        return res.status(400).send({
          message: "Logout failed!"
        });
    }
});

exports = module.exports = route;
