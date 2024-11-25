const mysql = require('mysql');


    console.log("connecting to the database");

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
            
            console.log('database connected')
            connection.query('SHOW DATABASES',
            function (err, result) {
                
                if (err) 
                    console.log(`error executing the query - ${err}`)
                
                else
                    console.log('result: ', result)
                              
            })            
        }        
    });