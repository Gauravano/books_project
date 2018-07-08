const express = require('express');
const session = require('express-session');

const app = express();


app.use('/', express.static('public'));
app.use('/uploads', express.static('uploads'));
app.use(session({secret: "hello", resave: false, saveUninitialized: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api', require('./routes/api').route);
app.set('port', (process.env.PORT || 4000));

app.use('/listings/:id',express.static('public'));
app.use('/listings/add',express.static('public'));
app.use('/messages',express.static('public'));
app.use('/wishlist',express.static('public'));
app.use('/signup',express.static('public'));
app.use('/login',express.static('public'));
app.use('/dashboard',express.static('public'));
app.all('*',(req, res) => {
  res.redirect('/');
})


app.listen(app.get('port'), function () {
   console.log("Node app is running at Port: ", app.get('port'));
});
