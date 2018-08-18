// ROUTES FOR OUR API
// =============================================================================
import { Router } from 'express';
import db from './db'
import send_error from './send_error';
const api = Router();              // get an instance of the express Router (this will be where the api calls happen)

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
api.get('/', (req, res) => {

    db.query('Select * from Location', (err, result) => {
        if (err) {
            send_error.internal_server(res, err);
        } else
            res.send("Result : " + JSON.stringify(result));
    });
});

// more routes for our API will happen here
api.post('/', (req, res) => {
    // console.log(req.body);
    // res.json(req.body);
});


// USER
// =============================================================================

/**
 * Create User
 * input should come in object with following fields:
 * name*, description, password*, image_path, last_login_id
 */
api.post('/user', (req, res) => {
    let account = req.body;
    if (!account.name || !account.password)
        send_error.invalid_input(res), err;
    else {
        db.query("insert into User set ?", account, (err, result) => {
            if (err) {
                console.log(err);
                send_error.internal_server(res, err);
            } else {
                console.log('Succesfully added');
                res.status(200).send('User created');
            }
        });
    }
});


/**
 * Get all Users
 */
api.get('/user', (req, res) => {
    db.query('select * from User', (err, result) => {
        if (err) {
            console.log(err);
            send_error.internal_server(res, err);
        } else {
            res.send(result);
        }
    });
});

/**
 * Get User by id
 * a param of the url should be the id
 */
api.get('/user/:id', (req, res) => {
    let id = parseInt(req.params.id);
    if (!Number.isInteger(id))
        send_error.invalid_input(res);
    else {
        db.query('select * from User where user_id = ?', id, (err, result) => {
            if (err)
                send_error.internal_server(res, err);
            else
                res.send(result);
        });
    }
});

// QUESTION
// =============================================================================

/**
 * Create Question
 * input should come in object with following fields FORNOW:
 * poster_id*, question*, ans1*, ans2*
 */
api.post('/question', (req, res) => {
    let question = req.body;
    if (!Number.isInteger(question.poster_id)) {
        console.log('oh no')
        return
    }
    if (!question.poster_id || !question.question || !question.ans1 || !question.ans2)
        send_error.invalid_input(res), err;
    else {
        db.query("insert into Question set ?", question, (err, result) => {
            if (err) {
                console.log(err);
                send_error.internal_server(res, err);
            } else {
                console.log('Succesfully added');
                res.status(200).send('Question created');
            }
        });
    }
});

/**
 * Get all Questions
 */
api.get('/question', (req, res) => {
    db.query('select * from Question', (err, result) => {
        if (err) {
            console.log(err);
            send_error.internal_server(res, err);
        } else {
            res.send(result);
        }
    });
});

/**
 * Get Question by id
 * a param of the url should be the id
 */
api.get('/question/:id', (req, res) => {
    let id = parseInt(req.params.id);
    if (!Number.isInteger(id))
        send_error.invalid_input(res);
    else {
        db.query('select * from Question where question_id = ?', id, (err, result) => {
            if (err)
                send_error.internal_server(res, err);
            else
                res.send(result);
        });
    }
});

// Location
// =============================================================================
/**
 * Get Location by id
 * a param of the url should be the id
 */
api.get('/location/:id', (req, res) => {
    let id = parseInt(req.params.id);
    if (!Number.isInteger(id))
        send_error.invalid_input(res);
    else {
        db.query('select * from Question where question_id = ?', id, (err, result) => {
            if (err)
                send_error.internal_server(res, err);
            else
                res.send(result);
        });
    }
});

export default api;