const express = require('express');
const router = express.Router();

const db = require('../Database/connection'); // adjust if needed

router.get('/', (req, res) => {
    db.query('SELECT * FROM Ingredients', (err, ingredients) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send('Error retrieving ingredients');
        }

        res.render('add', {
            title: 'Add a Recipe',
            ingredients // ✅ this is what was missing!
        });
    });
});
router.post('/', (req, res) => {
    const { RecipeName, Protein, PrepTime, CookTime, Servings, IngredientIDs } = req.body;

    const recipeQuery = `INSERT INTO Recipe (RecipeName, Protein, PrepTime, CookTime, Servings) VALUES (?, ?, ?, ?, ?)`;
    db.query(recipeQuery, [RecipeName, Protein, PrepTime, CookTime, Servings], (err, result) => {
        if (err) {
            console.error('Error inserting recipe:', err);
            return res.status(500).send('Error saving recipe');
        }

        const newRecipeID = result.insertId;

        if (Array.isArray(IngredientIDs) && IngredientIDs.length > 0) {
            const ingredientValues = IngredientIDs.map(id => [newRecipeID, id]);
            const ingredientQuery = `INSERT INTO RecipeToIngredients (RecipeID, IngredientID) VALUES ?`;

            db.query(ingredientQuery, [ingredientValues], (err) => {
                if (err) {
                    console.error('Error linking ingredients:', err);
                    return res.status(500).send('Error linking ingredients');
                }
                res.redirect('/recipes');
            });
        } else {
            res.redirect('/recipes');
        }
    });
});

module.exports = router;