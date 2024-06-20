const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',  // Replace 'localhost' with your MySQL host if different
  user: 'root',  // Replace 'your_username' with your MySQL username
  password: 'ismail211084',  // Replace 'your_password' with your MySQL password
  database: 'contactdb'  // Replace 'contactdb' with your database name
});

// Create a new contact
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  
  pool.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error saving contact');
    } else {
      res.send('Contact saved successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
