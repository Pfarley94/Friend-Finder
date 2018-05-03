var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");





var app = express()
var PORT = 80;

app.get('/', function (req, res) {
  res.send('Hello World')
})
 

app.use(express.static(path.join(__dirname, './app/public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


require(path.join(__dirname, './routing/apiRoutes.js'))(app);
require(path.join(__dirname, './routing/htmlRoutes.js'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});