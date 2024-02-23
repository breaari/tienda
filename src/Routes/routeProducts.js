const { Router } = require('express');
const { getAllProductsHandler, createProductsHandler } = require("../Handlers/productsHadler")


routeProducts = Router();

routeProducts.get("/", getAllProductsHandler) 

routeProducts.post("/", createProductsHandler)





module.exports = {
    routeProducts
}