const express = require('express');
const db = require('./database');

const app = express();

const port = 3500;


// // performing CRUD operation
// // CREATE
// app.get('/create', (req, res) => {
//     const sql = ` 
//     CREATE TABLE IF NOT EXISTS users(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     )`
//     db.query(sql, (err, result) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send({ message: 'Failed to create table' });
//             } else {
//                 res.send({ message: 'Table created successfully' });
//                 }
//             })
//         })

//performing CRUD operations
//CREATE
//READ
//UPDATE
//DELETE

app.get('/createTable', (req, res) => {
    const sql = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `
    db.query(sql, (err) => {
        if(err){
            console.log('Error creating users table:', err)
            return response.status(500).send('Error creating users table')
        }

        res.send('users table created succcessfully.')
    });
});


app.get('/createUser', (req, res) => {
    const sql = `
    INSERT INTO users (name, email) 
    VALUES ('Kings', 'kings042@gmail.com')
    `
    db.query(sql, (err) => {
        if(err){
            console.log('Error creating user record:', err)
            return response.status(500).send('Error creating user');
            }
            res.send('User record created successfully')
            });
        });

app.get('/', (req, res) => {
    res.status(200).send('Hello, you are now using the express package.')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
