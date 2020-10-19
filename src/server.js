//import dependencies
const express = require("express");
const path = require("path");

//init expŕess
const server = express();
server

    //using static files
    .use(express.static("public"))

    //config temple engine
    .set('views', path.join(__dirname,"views"))
    .set('view engine', 'hbs')

    //create path
    .get("/", (request, response) => {
        return response.render('index');
    })

    //start server
    .listen(5500);
