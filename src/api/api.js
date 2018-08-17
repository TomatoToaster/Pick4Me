// ROUTES FOR OUR API
// =============================================================================
const api = express.Router();              // get an instance of the express Router (this will be like an independent express app)
const bodyParser = import('body-parser');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
api.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

export default api;