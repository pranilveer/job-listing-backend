const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
// const mongoose = require('mogoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello from server')
})

module.exports = app;