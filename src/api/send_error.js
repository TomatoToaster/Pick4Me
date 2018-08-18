// Woah look a curried function!!
let log_and_send_error = (status_code, message) => (res, err) => {
  if (err)
    console.log(err);
  res.status(status_code).send(message);
}

export default {
  internal_server: log_and_send_error(500, 'Something went wrong here sorry'),
  invalid_input: log_and_send_error(400, 'Invalid input'),
  duplicate_entry: log_and_send_error(400, 'Trying to make a duplicate entry')
};