const express = require('express');
const app = express();
const mysql = require('mysql2');  // Use mysql2 instead of mysql
const bodyParser = require('body-parser');


const addRouter = require('./routes/add');
app.use(express.urlencoded({ extended: true }));
app.use('/add', addRouter);
const recipesRouter = require('./routes/recipes');
app.use('/recipes', recipesRouter);
app.use(express.json());


// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',   // Ensure this is your MySQL user
    password: 'gggggggg',   // Update if you have a password
    database: 'HW2'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.message);
        return;
    }
    console.log('MySQL Connected...');
});

// Middleware
app.set('view engine', 'ejs');  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Routes
const recipeRoutes = require('./routes/recipes');
app.use('/recipes', recipeRoutes);
const indexRouter = require('./routes/index');
app.use('/', indexRouter);


app.get('/', (req, res) => {
    res.render('index', {   
    title: 'Home Page', 
    favoriteFood: 'Mac and Cheese', 
    cookingExperience: 'I love making filling homestyle dishes that make you feel warm and happy!' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
