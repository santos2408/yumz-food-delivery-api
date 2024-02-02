const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: "",
});

// module.exports = {
//   query: (text, params) => pool.promise().query(text, params),
// };

module.exports = pool.promise();
