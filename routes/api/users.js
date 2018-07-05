const User = require('../../db').User;
const route = require('express').Router();



route.get('/:id', (req,res) => {

  User.find({
    where: {
      id: req.params.id
    }
  }).then((user) => {
    if(user){
      return res.status(200).send(user);
    }else{
      return res.status(400).send("No user with this Id found!");
    }
  }).catch((err) => {
    return res.status(500).send("Can't fetch at current time!");
  })
});  

route.get('/signup', (req, res) => {

    if (!req.session.user){
        res.status(200).send();
    }else {
        res.status(301).send("Logout from the current session first. Thank you.");
    }
});

route.get('/login', (req, res) => {

    if (!req.session.user){
        res.status(200).send("OK");
    }else {
        res.status(301).send("Logout from the current session first. Thank you.");
    }
});

route.post('/signup', (req, res) => {

   console.log("Signup Request: ",req.body);

    if (req.session.user){
        return res.status(301).send("Logout from the current session first. Thank you.");
    }

    User.find({
      where: {
        email: req.body.email
      }
    }).then((user) => {
      if(user){
        return res.status(406).send("User with this email id already exist! ");
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

    if (req.session.user){
        return res.status(301).send("Logout from the current session first. Thank you.");
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

// route.get('/dashboard', function (req, res) {
//     if(!req.session.user){
//         return res.status(401).send();
//     }else{
//         console.log("Current user", req.session.user);
//         return res.status(200).send("Welcome");
//     }
// });

route.get('/:id', (req,res) => {

  User.find({
    where: {
      id: req.params.id
    }
  }).then((user) => {
    if(user){
      return res.status(200).send(user);
    }else{
      return res.status(400).send("No user with this Id found!");
    }
  }).catch((err) => {
    return res.status(500).send("Can't fetch at current time!");
  })

});

exports = module.exports = route;
