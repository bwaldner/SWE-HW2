const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    //res.send('Welcome to the index page!');
    res.render('index', { 
         title: 'Home Page', 
    favoriteFood: 'Mac and Cheese', 
    cookingStyle: 'I love making filling homestyle dishes that make you feel warm and happy!' });
});

// Export the router properly
module.exports = router;