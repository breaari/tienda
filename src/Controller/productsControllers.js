const { Product } = require("../db");

let arrayFilter = [];

const getAllProductsController = async () => {
  try {
    const responseDB = await Product.findAll();
    arrayFilter = responseDB;
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

const getProductsByPriceController = async (orderType) => {
  //arr.sort((a, b) => a - b)
  if (orderType === "ascendent") {
    const orderArray = arrayFilter.sort((a, b) => a.price - b.price);
    arrayFilter = orderArray;

    return orderArray;
  } else if (orderType === "descendent") {
    const orderArray = arrayFilter.sort((a, b) => b.price - a.price);
    arrayFilter = orderArray;

    return orderArray;
  }
};

const getByAlphabeticallyController = async (orderAlphabetically) => {
  try {
    if (orderAlphabetically === "A-Z") {
      arrayFilter.sort((a, b) => a.name.localeCompare(b.name));
    } else if (orderAlphabetically === "Z-A") {
      arrayFilter.sort((a, b) => b.name.localeCompare(a.name));
    }

    return arrayFilter;
  } catch (error) {
    throw new Error(
      "Error filtering products by alphabetical order: " + error.message
    );
  }
};

const getGenreController = async (typeGenre) => {
  try {
    let genreArray;
    if (typeGenre === "unisex") {
      genreArray = await Product.findAll({
        where: {
          genre: "unisex",
        },
      });
    } else if (typeGenre === "male") {
      genreArray = await Product.findAll({
        where: {
          genre: "male",
        },
      });
    } else if (typeGenre === "female") {
      genreArray = await Product.findAll({
        where: {
          genre: "female",
        },
      });
    }

    arrayFilter = genreArray;

    return genreArray;
  } catch (error) {
    throw new Error("Error filtering products by genre: " + error.message);
  }
};

module.exports = {
  getAllProductsController,
  createProductController,
  getProductsByPriceController,
  getByAlphabeticallyController,
  getGenreController,
};
