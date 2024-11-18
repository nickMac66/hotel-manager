let mysql = require('mysql');

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

// executing connection
conn.connect(function (err) {
    
    if (err) {
     
        console.log("error occurred while connecting");
    
    } else {
    
        console.log("connection created with mysql successfully");
    
    }
});

//const http = require('node:http');
//
//const hostname = '127.0.0.1';
//const port = 3000;
//
//const server = http.createServer((req, res) => {
//  res.statusCode = 200;
//  res.setHeader('Content-Type', 'text/plain') ;
//  res.end('Hello, World!\n');
//});
//
//server.listen(port, hostname, () => {
//  console.log(`Server running at http://${hostname}:${port}/`);
//}); 