const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

const router = require("./routes");

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/', router);

app.listen(port, () => {
    console.log(`listening on ${port}`)
});

