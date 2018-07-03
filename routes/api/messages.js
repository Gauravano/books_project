const route = require('express').Router();
const Message = require('../../db').Message;
const Listing = require('../../db').Listing;

route.post('/create', (req,res) => {
    if(!req.session.user){
        return res.status(400).send("Please login to send message to the book owner.");
    }

    console.log("Message: ",req.body);

    Message.create({
        senderId: req.session.user.id,
        listingId: req.body.listingId,
        content: req.body.content
    }).then((message) => {
        res.status(201).send(message);
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Couldn't send message to the book owner.");
    })
});

route.get('/:listingId', (req,res) => {
    if(!req.session.user){
        return res.status(400).send("Please login to see the messages.");
    }

    Listing.find({
        where: {
            id: req.params.listingId
        }
    }).then((item) => {
        if(item){
            if(item.userId != req.session.user.id){
                return res.status(401).send("Only book owner can see the messages!");
            }
        }else{
            return res.status(400).send("Invalid listing!");
        }
    })

    Message.findAll({
        where: {
            listingId: req.params.listingId
        }
    }).then((messages) => {
        res.status(200).send(messages);
    }).catch((err) => {
        error: "Can't fetch messages!"
    })
});

exports = module.exports = route;