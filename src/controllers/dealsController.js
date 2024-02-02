const database = require("../config/database");

exports.getDeals = async (request, response) => {
  try {
    const [rows] = await database.query("SELECT * FROM deals");
    response.status(200).send(rows);
  } catch (error) {
    console.log(error);
  }
};

exports.postCreateDeal = async (request, response) => {
  const { description, image } = request.body;

  try {
    await database.query("INSERT INTO deals (id, description, image) VALUES (UUID(), ?, ?)", [description, image]);

    response.status(202).send({
      message: "Restaurante criado com sucesso.",
    });
  } catch (error) {
    console.log(error);
  }
};
