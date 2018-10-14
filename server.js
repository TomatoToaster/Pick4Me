// Serves up both the express api and the react webapp on this server

var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/front'))


var api = require('./dist/api/api'); // import my bundled api
var config = require('./Config');

const port = process.env.PORT || config.port;      // set our port

// Route all the calls prefixed with /api to the api we've imported
app.use('/api', api);

// Sends the front end application up
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/dist/index.html'));
})

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server is running on ' + port);