//import dependencies
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

//init expŕess
const server = express();
server

  //using static files
  .use(express.static("public"))

  //config temple engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  //create path
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/create-orphanage", pages.createOrphanage)
  .get("/orphanages", pages.orphanages);

//start server
server.listen(5500);
