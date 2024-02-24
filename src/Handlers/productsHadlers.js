const {
  getAllProductsController,
  createProductController,
  getProductsByPriceController
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

const filterByPriceHandler = async (req, res) => {

  const { orderType } = req.params;

  const productsFiltered = await getProductsByPriceController(orderType)
  try { 
    res.status(200).json(productsFiltered)
  }
  catch (error) {
    res.status(417).send("Error filtering products by price");  // 417 Expectation Failed
  }
}

module.exports = {
  getAllProductsHandler,
  createProductsHandler,
  filterByPriceHandler
};
