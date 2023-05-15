const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set up a route to serve the HTML page
app.get('/', (req, res) => {
    // Send the HTML page with image links
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Serve the image files
app.get('/image1', (req, res) => {
    res.sendFile(path.join(__dirname, 'uploads', 'one.png'));
});

app.get('/image2', (req, res) => {
    res.sendFile(path.join(__dirname, 'uploads', 'two.png'));
});

app.get('/image3', (req, res) => {
    res.sendFile(path.join(__dirname, 'uploads', 'three.png'));
});

app.get('/image4', (req, res) => {
    res.sendFile(path.join(__dirname, 'uploads', 'four.png'));
});

app.get('/image5', (req, res) => {
    res.sendFile(path.join(__dirname, 'uploads', 'five.png'));
});

app.get('/image6', (req, res) => {
    res.sendFile(path.join(__dirname, 'uploads', 'six.png'));
});

app.get('/image7', (req, res) => {
    res.sendFile(path.join(__dirname, 'uploads', 'seven.png'));
});

app.get('/image8', (req, res) => {
    res.sendFile(path.join(__dirname, 'uploads', 'eight.png'));
});

app.get('/image9', (req, res) => {
    res.sendFile(path.join(__dirname, 'uploads', 'nine.png'));
});

app.get('/image10', (req, res) => {
    res.sendFile(path.join(__dirname, 'uploads', 'ten.png'));
});

// Start the server
const port = 3000; // or any other port you prefer

// Serve the CSS files
app.get('/css/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'css', 'style.css'));
});

app.get('/css/image1.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'css', 'image1.css'));
});

app.get('/css/image2.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'css', 'image2.css'));
});

// Add CSS routes for image3 to image10

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
