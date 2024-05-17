
const express = require('express');
const listRouter = require('./routes/listRoutes');

let app = express();

app.use(express.json());


//USING ROUTES
app.use('/api/v1/reviews', listRouter)

module.exports = app;