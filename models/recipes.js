const mongoose = require('mongoose');
const  { Schema, model } = mongoose;
// const Recipes = express.Router();
// const recipesController = require('./recipes.js');

const recipesSchema = new Schema( {
    rname: String,
    rtype: String,
    allergy: String,
    calories: String,
    portions: Number,
    ingredients: String,
    oventemp: Number,
    howlong: String,
    rsteps1: String,
    rsteps2: String,
    rsteps3: String,
    rsteps4: String,
    rsteps5: String,
    rsteps7: String,
    rsteps8: String,
    rsteps9: String,
    rsteps10: String,
    rsteps11: String,
    rsteps12: String,
    rsteps13: String,
    rsteps14: String,
    rsteps15: String,
    img: { data: Buffer, contentType: String}
});

const Recipes = model('recipes', recipesSchema);

module.exports = Recipes;