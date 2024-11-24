const express = require('express');
const path = require('node:path');
const app = express();
const PORT = process.env.PORT || 3000;
const indexHtml = path.resolve('public_html', 'index.html');
console.log("absolute path: " + indexHtml);

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../public_html')));
app.use('/js', express.static(path.join(__dirname, '../js')));
app.use('/controllers', express.static(path.join(__dirname, '../controllers')));
app.use('/db', express.static(path.join(__dirname, '../db')));

// Route to send index.html
app.get('/', (req, res) => {
    res.sendFile(indexHtml);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});





