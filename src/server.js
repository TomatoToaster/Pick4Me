// Serves both the express api and the react webapp on this server

import express from 'express'       // call express
const app = express();                    // define our app using express

import api from './api/api'          // import my api from 

const port = process.env.PORT || 8080;      // set our port

// Route all the calls prefixed with /api to the api we've imported
app.use('/api', api);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);