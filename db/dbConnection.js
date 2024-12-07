// Import the mysql module from the server
const { mysql } = require('../src/server');


function dbConnect() {
    
    // Create a database connection
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'hotel_manager'
    });
    
    // Connect to the database
    connection.connect(function (err) {
        if (err) {
            console.log("!!!!!connection error!!!!!");
            console.log(err);
        } else {
            console.log('.....database connected.....');
        }
    });
    
    return connection;
}

module.exports = { dbConnect };