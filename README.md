
This is a simple web app that lets users view and add their recipes. It uses Express.js, EJS for rendering, and MySQL as the database.

Setup Instructions
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/bwaldner/SWE-HW2.git
cd SWE-HW2
2. Install Dependencies
Make sure you have Node.js and npm installed, then run:

bash
Copy
Edit
npm install
3. Set Up the MySQL Database
Make sure MySQL is installed and running.

Open a terminal and log in:

bash
Copy
Edit
mysql -u root -p
Create the database:

sql
Copy
Edit
CREATE DATABASE HW2;
Exit the MySQL shell and import the SQL schema:

bash
Copy
Edit
mysql -u root -p HW2 < ./Database/HW2.sql
4. Configure the Database Connection
Open the file Database/connection.js and update the credentials if needed:

js
Copy
Edit
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_mysql_password_here',
    database: 'HW2'
});
5. Run the App
bash
Copy
Edit
node app.js
Visit http://localhost:3000 in your browser.

Home page with navigation

View all recipes

View individual recipe details

Add new recipes with multiple ingredients

Basic search functionality

Project Structure
app.js – main server setup

routes/ – route handlers for pages

views/ – EJS templates

public/ – CSS files

Database/ – MySQL connection and SQL schema

Author
Ben Waldner


