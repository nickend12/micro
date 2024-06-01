
const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: '*' }));

// Rutas

const proyecto = require('./routes/proyecto');


app.use('/api/proyecto', proyecto);

module.exports = app;
