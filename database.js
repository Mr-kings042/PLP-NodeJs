const mysql = require('mysql2');

// create connection to DBMS
const db = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'node_crud'
    });

    // connect to db
    db.connect((err) =>{
        if(err){ 
            console.log("Error connecting to Database:" , err.stack);
            return;
        }
        console.log("successfully connected to Database")
    });
    // export the connection
    module.exports = db;