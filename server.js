const app = require("./src/app");

const port = process.env.DB_PORT || 3000;

app.listen(port, () => {
  console.log(`Yumz! Food Delivery API executando na porta: ${port}`);
});
