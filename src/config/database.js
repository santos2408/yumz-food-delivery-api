const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "yumz_food_delivery",
  password: "",
});

// module.exports = {
//   query: (text, params) => pool.promise().query(text, params),
// };

module.exports = pool.promise();
