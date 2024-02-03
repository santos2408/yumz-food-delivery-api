const mysql = require("mysql2");

const dotenv = require("dotenv");

dotenv.config()

// const pool = mysql.createPool({
//   host: process.env.MYSQL_ADDON_HOST,
//   user: process.env.MYSQL_ADDON_DB_USER,
//   database: process.env.MYSQL_ADDON_DB,
//   password: process.env.MYSQL_ADDON_PASSWORD,
//   port: process.env.MYSQL_ADDON_PORT,
// });

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "yumz_food_delivery",
  password: "",
  port: process.env.MYSQL_ADDON_PORT
});

console.log(process.env.MYSQL_ADDON_PORT)

// module.exports = {
//   query: (text, params) => pool.promise().query(text, params),
// };

module.exports = pool.promise();
