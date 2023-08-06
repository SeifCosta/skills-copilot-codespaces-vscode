// Create web server
// 1. Install express
// 2. Require express
// 3. Create an instance of express
// 4. Create a route
// 5. Listen on a port

// 1. Install express
// npm i express

// 2. Require express
const express = require('express');

// 3. Create an instance of express
const app = express();

// 4. Create a route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// 5. Listen on a port
app.listen(3000, () => {
    console.log('Listening on port 3000');
});