const database = require("../config/database");

exports.getRestaurants = async (request, response) => {
  try {
    const [rows] = await database.query("SELECT * FROM restaurants");
    response.status(200).send(rows);
  } catch (error) {
    console.log(error);
  }
};

exports.postCreateRestaurant = async (request, response) => {
  const { name, description, slug, logo, rate, category, delivery_time_min, delivery_time_max, shipping, adress } = request.body;

  try {
    await database.query(
      "INSERT INTO restaurants (id, name, description, slug, logo, rate, category, delivery_time_min, delivery_time_max, shipping, adress) VALUES (UUID(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [name, description, slug, logo, rate, category, delivery_time_min, delivery_time_max, shipping, adress],
    );

    response.status(202).send({
      message: "Restaurante criado com sucesso.",
    });
  } catch (error) {
    console.log(error);
  }
};
