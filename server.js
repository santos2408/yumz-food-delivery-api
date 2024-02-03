const app = require("./src/app");
const dotenv = require("dotenv");

dotenv.config()

const port = process.env.MYSQL_ADDON_PORT || 3000;

app.listen(port, () => {
  console.log(`Yumz! Food Delivery API executando na porta: ${port}`);
});
