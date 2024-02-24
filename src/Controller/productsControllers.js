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
  if(orderType === "ascendent"){
    const orderArray = arrayFilter.sort((a,b) => a.price - b.price);
    arrayFilter = orderArray;
    console.log(orderArray)
    return orderArray;
  }
  else if(orderType === "descendent"){
    const orderArray = arrayFilter.sort((a,b) => b.price - a.price);
    arrayFilter = orderArray;
    console.log(orderArray)
    return orderArray;
  }

}

module.exports = {
  getAllProductsController,
  createProductController,
  getProductsByPriceController
};
