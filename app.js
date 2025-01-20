const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Middleware to parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Define a route handler for the root URL of the application
app.get('/', (req, res) => {
//    const {buildForm} = require('./src/models/bookingForm');
//    let html = buildForm();
//    res.render("index", {html});
});

app.post('/', function (req, res) {
    
    // Import function to get user input and extract the form data
    const {validateForm} = require('./src/validation/auth');    
    
    // Validate the form
    let formIsValid = validateForm();
    
    if(formIsValid) {
//        alert("...valid...");
    } else {
//        alert("!!!notValid!!!");
    }
});

// Serve other static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));;
app.use('/src', express.static(path.join(__dirname, 'src/controllers')));

// Starting the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});




