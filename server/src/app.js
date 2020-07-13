
//importo middleware

const express = require('express');
const cors = require('cors');
const app = express();

app.set('port',process.env.PORT);

app.use(cors());
app.use(express.json());

app.use(`/api/items/`, require('./routes/routes'));

module.exports = app;