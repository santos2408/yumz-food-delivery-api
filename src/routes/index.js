const express = require("express");

const router = express.Router();

const restaurantsRoutes = require("./restaurants.routes");
const dealsRoutes = require("./deals.routes");

router.use(restaurantsRoutes);
router.use(dealsRoutes);

router.use("/", (request, response) => {
  response.status(200).send({
    message: "Rota acessada com sucesso!",
  });
});

module.exports = router;
