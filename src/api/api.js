// ROUTES FOR OUR API
// =============================================================================
import { Router } from 'express';
import db from './db'
const api = Router();              // get an instance of the express Router (this will be where the api calls happen)

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
api.get('/', (req, res) => {

    db.query('Select * from Location', (err, result) => {
        if (err) console.log(err);
        res.send("Result : " + JSON.stringify(result));
    });
});

// more routes for our API will happen here
api.post('/', (req, res) => {
    // console.log(req.body);
    // res.json(req.body);
});

export default api;