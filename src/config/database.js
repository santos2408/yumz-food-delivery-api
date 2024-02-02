const mysql = require("mysql2");

const dotenv = require("dotenv");

dotenv.config()

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

// module.exports = {
//   query: (text, params) => pool.promise().query(text, params),
// };

module.exports = pool.promise();
