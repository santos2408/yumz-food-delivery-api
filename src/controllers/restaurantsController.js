const database = require("../config/database");

exports.getRestaurants = async (request, response) => {
  try {
    const { page, limit, category } = request.query;
    const offset = (page - 1) * limit;
    let rows = null;

    if (category) {
      const [rows] = await database.query("SELECT * FROM restaurants WHERE category = ? LIMIT ? OFFSET ?", [category, +limit, +offset]);
      response.status(200).send(rows);
    } else {
      const [rows] = await database.query("SELECT * FROM restaurants LIMIT ? OFFSET ?", [+limit, +offset]);
      response.status(200).send(rows);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.postCreateRestaurant = async (request, response) => {
  const { name, description, slug, logo, category, delivery_time_min, delivery_time_max, shipping, adress } = request.body;

  try {
    await database.query(
      "INSERT INTO restaurants (id, name, description, slug, logo, category, delivery_time_min, delivery_time_max, shipping, adress) VALUES (UUID(), ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [name, description, slug, logo, category, delivery_time_min, delivery_time_max, shipping, adress],
    );

    response.status(202).send({
      message: "Restaurante criado com sucesso.",
    });
  } catch (error) {
    console.log(error);
  }
};
