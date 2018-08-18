import mysql from 'mysql';
import config from '../../Config';

const mysqlconfig = config.mysql;

const connection = mysql.createConnection({
  host: mysqlconfig.host,
  user: mysqlconfig.user,
  password: mysqlconfig.password,
  database: mysqlconfig.database
});
connection.connect((err) => {
  if (err) throw err;
})

export default connection;