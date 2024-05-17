
const express = require('express');
const cors = require('cors');
const listRouter = require('./routes/listRoutes');

let app = express();


app.use(express.json());
app.use(cors());

//USING ROUTES
app.use('/api/v1/reviews', listRouter)

module.exports = app;