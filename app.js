var express = require("express");
var bodyParser = require("body-parser");

var connection = require("./routes/twitterConnection"); // Imports routes for the connection
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", connection);

var port = 3000;

app.listen(port, () => {
  console.log("Server is up and running on port number " + port);
});
