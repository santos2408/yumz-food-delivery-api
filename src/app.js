const express = require("express");
const cors = require("cors");

const app = express();

const index = require("./routes/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

// ==> index que gerencia todas as rotas
app.use(index);

app.get("/", (request, response) => {
  response.status(200).send({
    message: "Rota acessada com sucesso!",
  });
});

module.exports = app;
