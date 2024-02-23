const { Product } = require("../db");

const getAllProductsController = async () => {
  try {
    const responseDB = await Product.findAll();

    return responseDB;
  } catch (error) {
    console.error("Database error");
  }
};

const createProductController = async ({
  image,
  name,
  price,
  brand,
  size,
  type,
  color,
  genre,
}) => {
  try {
    const newProduct = await Product.create({
      image,
      name,
      price,
      brand,
      size,
      type,
      color,
      genre,
    });
    return newProduct;
  } catch (error) {
    throw new Error("Error creating product: " + error.message);
  }
};

module.exports = {
  getAllProductsController,
  createProductController,
};
