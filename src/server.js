//import dependencies
const express = require('express');
const path = require('path')
//init expŕess 
const server = express();

//create path
server.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'));
})

//start server
server.listen(5500)
