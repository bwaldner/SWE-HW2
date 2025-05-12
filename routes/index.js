const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        favoriteFood: 'Mac and cheese',
        cookingExperience: 'I love making homestyle dishes with lots of flavor and nutrients.'
    });
});

// Export the router properly
module.exports = router;