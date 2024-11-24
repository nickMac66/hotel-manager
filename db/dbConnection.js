//const sql = `INSERT INTO bookings (fname) VALUES ("Rosie")`;
//const mysql = require('mysql');
//
//
//function dbConnect() {
//
//
//    console.log("attempting to connect");
//
//    const connection = mysql.createConnection({
//        host: 'localhost',
//        user: 'root',
//        password: '',
//        database: 'hotel_manager'
//    });
//
//    connection.connect((err) => {
//        if (err) {
//            console.log("error connecting");
//            throw err;
//        }
//
//        console.log('Connected to the MySQL server.');
//
////        connection.query(sql, (err, result) => {
////            if (err)
////                throw err;
////            console.log('1 record inserted');
//
////            connection.end((err) => {
////                if (err)
////                    throw err;
////                console.log('Connection closed.');
////            });
////        });
//    });
//}