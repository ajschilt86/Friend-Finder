const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");


var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});