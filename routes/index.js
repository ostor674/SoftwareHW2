const express = require('express');
const router = express.Router();
const db = require('../database/db').db;  

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/recipe-list', async (req, res) => {
    try {
        const [recipes] = await db.query(`
            SELECT r.id, r.name, r.description, r.category, r.instructions, 
                   GROUP_CONCAT(i.name ORDER BY i.name) AS ingredients
            FROM recipes r
            JOIN recipe_ingredients ri ON r.id = ri.recipe_id
            JOIN ingredients i ON ri.ingredient_id = i.id
            GROUP BY r.id
            ORDER BY r.category, r.name;
        `);
        res.render('recipe-list', { recipes });
    } catch (err) {
        console.error('Error fetching recipes:', err);
        res.status(500).send('Error fetching recipes');
    }
});

router.get('/add-recipe', async (req, res) => {
    try {
        const [ingredients] = await db.query('SELECT * FROM ingredients');
        const proteinTypes = ['Beef', 'Chicken', 'Pork'];
        res.render('add-recipe', { ingredients, proteinTypes });
    } catch (err) {
        console.error('Error fetching ingredients:', err);
        res.status(500).send('Error fetching ingredients');
    }
});

router.post('/add-recipe', async (req, res) => {
    const { name, description, proteinType, ingredients, instructions } = req.body;
    
    try {
        const [recipeResult] = await db.query(`
            INSERT INTO recipes (name, description, category, instructions)
            VALUES (?, ?, ?, ?)
        `, [name, description, proteinType, instructions.split('\n').join(';')]);

        const recipeId = recipeResult.insertId;

        const ingredientValues = ingredients.map(ingredientId => [recipeId, ingredientId]);
        await db.query('INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES ?', [ingredientValues]);

        res.redirect('/recipe-list'); 
    } catch (err) {
        console.error('Error inserting recipe:', err);
        res.status(500).send('Error inserting recipe');
    }
});

module.exports = router;