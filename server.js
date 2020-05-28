// Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Recipes = require('./models/recipes.js');
const methodOverride = require('method-override');
const show = console.log;
const recipesController = require('./controllers/recipes.js')
;
const session = require('express-session');
const User = require('./models/users.js');
const bcrypt = require('bcryptjs');

require('dotenv').config(); // Process.env - holds all your variables
const DBURI = process.env.MONGOURI;
const port = process.env.PORT || 3000
const userController = require('./controllers/users_controller.js');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(session({
    secret: process.env.SECRET, // a random string - DO NOT copy this value oryour stuff will get hacked
    resave: false, // default - more info: https://npmjs.com/package/express-session#resave
    saveUninitialized: false // default - more info: https://www.npmjs.com/package/expression-session#resave
}))
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Controllers
app.use('/recipes', recipesController)
app.use('/user', userController);

// mongoose connection
mongoose.connect(DBURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    show("connected to mongo");
});

// Authorization Routes

const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
};

app.get('/sessions/new', (req, res) => {
    res.render('sessions/New', {currentUser: req.session.currentUser})
});

// Authentication Route (Login)
app.post('/sessions/', (req, res) => {

    // Check if user exists
    User.findOne( {username: req.body.username}, (err, foundUser) => {
        if(err) {
            // Send error if there is an error
            res.send(err)
        } else if (!foundUser) {

            // Send to register if user acct does not exist
            res.redirect('/user/new')
        } else {
            // Compare passwords
            if(bcrypt.compareSync(req.body.password, foundUser.password)) {
                // Send to the Recipes page
                req.session.currentUser = foundUser.username;
                res.redirect('/recipes')
            } else {
                // Tell the user their password is incorrect
                res.send('Wrong Password')
            }
        }
    });
});

app.delete('/sessions/', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/sessions/new')
    });
});



// listen
app.listen(port, () => {
    show(`listening on:  ${port}`);
});