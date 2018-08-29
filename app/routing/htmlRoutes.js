const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var app = express();





app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "survey.html"));
    });

}