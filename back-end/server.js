const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

// import routes
const marvelRoutes = require('./routes/marvel');

// server listening
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// home route 
app.get('/', (req, res) => {
    res.send('Welcome to my server')
})

// Static Assets Middleware
app.use(express.static('public'));

// JSON Middleware
app.use(express.json());

// Routes Middleware
app.use('/api/v1/marvel', marvelRoutes)

// Cors Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));