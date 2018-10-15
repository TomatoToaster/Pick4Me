// Serves up both the express api and the react webapp on this server

const express = require('express'); // call express
const app = express(); // define our app using express
const bodyParser = require('body-parser');
const path = require('path');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/front'))


const api = require('./dist/api/api'); // import my bundled api
const config = require('./Config');

const port = process.env.PORT || config.port;      // set our port

// Set up API
// =============================================================================

// Route all the calls prefixed with /api to the api we've imported
app.use('/api', api);

// Set up Front End
// =============================================================================

// This sends out the front end (index.html)
const front_end_handler = function(request, response) {
  response.sendFile(path.join(__dirname + '/dist/front/index.html'));
}

// These are the routes that should point to the front end
const front_end_routes = ['/'];

// Now we are sending the index.html to each of the front end routes
front_end_routes.forEach(route => app.get(route, front_end_handler));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server is running on ' + port);