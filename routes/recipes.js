const express = require('express');
const router = express.Router();
const db = require('../Database/connection'); // database connection

router.get('/', (req, res) => {
    //res.send('Recipes page');
    const searchQuery = req.query.search || ''; 

    const query = `
        SELECT DISTINCT Recipe.* 
        FROM Recipe
        LEFT JOIN RecipeToIngredients ON Recipe.RecipeID = RecipeToIngredients.RecipeID
        LEFT JOIN Ingredients ON RecipeToIngredients.IngredientID = Ingredients.IngredientID
        WHERE Recipe.RecipeName LIKE ? 
        OR Recipe.Protein LIKE ? 
        OR Ingredients.IngredientName LIKE ?`;

    const searchTerm = `%${searchQuery}%`; // partial matches

    db.query(query, [searchTerm, searchTerm, searchTerm], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send('Error retrieving recipes');
        }
        res.render('recipes', { title: 'All Recipes', recipes: results, searchQuery }); 
    });
});
router.get('/:id', (req, res) => {
    const recipeId = req.params.id;

    // get the recipe details
    const recipeQuery = 'SELECT * FROM Recipe WHERE RecipeID = ?';
    
    const ingredientsQuery = `
        SELECT Ingredients.IngredientName, Ingredients.Info
        FROM RecipeToIngredients
        JOIN Ingredients ON RecipeToIngredients.IngredientID = Ingredients.IngredientID
        WHERE RecipeToIngredients.RecipeID = ?`;

    db.query(recipeQuery, [recipeId], (err, recipeResults) => {
        if (err || recipeResults.length === 0) {
            return res.status(404).send('Recipe not found');
        }

        db.query(ingredientsQuery, [recipeId], (err, ingredientResults) => {
            if (err) {
                console.error('Error retrieving ingredients:', err);
                return res.status(500).send('Database error: ' + err.message);
            }

            res.render('recipe', {
                title: recipeResults[0].RecipeName,
                recipe: recipeResults[0],
                ingredients: ingredientResults
            });
        });
    });
});

module.exports = router;