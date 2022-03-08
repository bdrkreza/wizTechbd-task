const express = require('express');
const cors = require('cors');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config();
const app = express();

// all middleware array
const middleware = [
    //body-parser connect
    express.json({ limit: '30mb', extended: true }),
    express.urlencoded({ limit: '30mb', extended: true }),
    //cors connect
    cors(),
];

// all middleware 
app.use(middleware);

//server connect
require('./database');

//load routes
const userHandler = require("./routes/user.router");



// application routes
app.use("/api/user", userHandler);



// default error handler
app.use(errorHandler);
//server port connect
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`api is ready on http://localhost:${PORT}`);
})