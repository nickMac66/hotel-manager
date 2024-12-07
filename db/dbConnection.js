const { mysql } = require('../src/server');

function dbConnect() {
    console.log("connecting to the database...");

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'hotel_manager'
    });
    connection.connect(function (err) {

        if (err) {

            console.log("Error in the connection");
            console.log(err);

        } else {

            console.log('...database connected...');
        }
    });
    return connection;
}

module.exports = {dbConnect};