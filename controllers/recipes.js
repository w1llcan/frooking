// Get Express
const express = require('express');

// Create the recipesController Router
const recipesController = express.Router();

// Get Mongoose and Recipes Schema
const mongoose = require('mongoose');
const Recipes = require('../models/recipes.js');

const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) return next()
     else res.redirect('/sessions/new');
};

// Routes

// Index
recipesController.get('/', (req, res) => {
    Recipes.find({}, (error, allRecipes) => {
        res.render('Index', {
            recipes: allRecipes,
            username: req.session.currentUser
        });
    });
});

// New
recipesController.get('/new', (req, res) => {
    res.render('New');
});

// Create
recipesController.post('/', (req, res) => {

Recipes.create(req.body, (error, createdRecipes) => {
    res.redirect('/recipes');
});

});

// Seed

recipesController.get('/seed', (req, res) => {
    Recipes.create([
        {
    rname: 'my lasagna',
    rtype: 'Omnivorous',
    calories: 400,
    portions: 10,
    allergies: ['Egg', 'Cottage Cheese'],
    ingredients: ['1 box lasagna noodles', '2 eggs', '2 cups cottage cheese', '2 lbs. ground beef', '1 lb. shredded mozzarella cheese', '3 tbsp oregano', '3 tbsp thyme', '2 tbsp chopped garlic', '1 tsp salt', '1 tsp black pepper', '1/2 tsp sugar', '1 can diced tomatoes', '1 can tomato paste', '2 cans hot water'],
    directions: ['Brown the ground beef', 'Mix in the salt, pepper, garlic, oregano, thyme', 'Add tomatoes, tomato paste, and water', 'Mix the eggs and cottage cheese in another container while simmering the meat sauce', 'Place the shredded mozzarella cheese in another container', 'Place a small layer of meat sauce in the bottom of baking pan', 'Place one layer of noodles on top of the meat sauce layer','NOTE: Alternate the noodle layers, so it will hold the lasana together better', 'Layer of cottage cheese/egg mixture', 'layer of mozzarella cheese', 'Hearty layer of meat sauce', 'Layer of noodles', 'Layer of cottage cheese/eggs', 'Layer of meat sauce', 'Final layer of noodles', 'Hearty layer of meat sauce', 'Bake for 35 minutes at 375 degrees'],
    img: "https://i.imgur.com/oebPj0e.png"
        }
    ])
})






// Delete
recipesController.delete('/:id', (req, res) => {
    Recipes.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/recipes');
    });
});

// Show
recipesController.get('/:id', (req, res) => {
    Recipes.findById(req.params.id, (error, foundRecipes) => {
        res.render('Show', {
            recipes: foundRecipes
        });
    });
});

// Edit
recipesController.get('/edit/:id', (req, res) => {
    Recipes.findById(req.params.id, (error, foundRecipes) => {
        res.render('Edit', { recipes: foundRecipes });
    });
});

// Update
recipesController.put('/edit/:id', (req, res) => {
    
    Recipes.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        res.redirect('/recipes');
    });
});

module.exports = recipesController;