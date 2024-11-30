const mysql = require('mysql');

    console.log("connecting to the database");

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'hotel_manager'
    });        
    
    module.exports = { connection };