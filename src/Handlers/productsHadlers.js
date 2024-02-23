const {
  getAllProductsController,
  createProductController,
} = require("../Controller/productsControllers");

const getAllProductsHandler = async (req, res) => {
  try {
    const responseController = await getAllProductsController();
    res.status(200).json(responseController);
  } catch (error) {
    res.status(404).send("Not find products");
  }
};

const createProductsHandler = async (req, res) => {
  const { image, name, price, brand, size, type, color, genre } = req.body;

  try {
    const responseController = await createProductController({
      image,
      name,
      price,
      brand,
      size,
      type,
      color,
      genre,
    });
    res.status(201).json(responseController);
  } catch (error) {
    res.status(417).send("Error creating product");
  }
};

module.exports = {
  getAllProductsHandler,
  createProductsHandler,
};
