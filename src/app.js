const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: true, credentials: true }));

const index = require("./routes/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));

// ==> index que gerencia todas as rotas
app.use(index);

module.exports = app;
