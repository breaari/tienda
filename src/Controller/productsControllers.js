const { Product } = require("../db");


let arrayFilter = [];
let BooleanFilterType = false;
let BooleanFilterBrand = false;

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
  try {
    //arr.sort((a, b) => a - b)
  if(orderType === "ascendent"){
    const orderArray =  arrayFilter.sort((a,b) => a.price - b.price);
    arrayFilter = orderArray;
    return arrayFilter;
  }
  else if(orderType === "descendent"){
    const orderArray = arrayFilter.sort((a,b) => b.price - a.price);
    arrayFilter = orderArray;
    return arrayFilter;
  }
  else{
    throw "OrderPrice does not exist, please enter ascendent or descendent.";
  }
} catch (error) {
    return  error;
  }

}

const getProductsByTypeController = async (filterType) => {
  try {
    const filterProductsByType = (type) => {
      return arrayFilter.filter((product) => product.type === type);
    };

    if (BooleanFilterType === false) {
      const filteredArray = filterProductsByType(filterType);
      arrayFilter = filteredArray;
      BooleanFilterType = true;
      return arrayFilter;
    }
    else{
      throw "type does not exist, please enter a valid type.";
    }
  } catch (error) {
      return  error;
    }
  
  }

const getProductsByBrandController = async (filterBrand) => {
  try {
    const filterProductsByBrand = (brand) => {
      return arrayFilter.filter((product) => product.brand === brand);
    };

    if (BooleanFilterBrand === false) {
      const filteredArray = filterProductsByBrand(filterBrand);
      arrayFilter = filteredArray;
      BooleanFilterBrand = true;
      return arrayFilter;
    }
    else{
      throw "type does not exist, please enter a valid brand.";
    }
  } catch (error) {
      return  error;
    }
  
  }

module.exports = {
  getAllProductsController,
  createProductController,
  getProductsByPriceController,
  getProductsByTypeController,
  getProductsByBrandController,
};
