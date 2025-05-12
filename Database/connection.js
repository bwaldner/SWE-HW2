const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gggggggg',  
    database: 'HW2'
});
console.log("DB config:", {
    host: connection.config.host,
    user: connection.config.user,
    password: connection.config.password,
    database: connection.config.database
});


connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('MySQL connection successful!');
});

module.exports = connection;