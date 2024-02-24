const { Router } = require('express');
const { getAllProductsHandler, createProductsHandler, filterByPriceHandler } = require("../Handlers/productsHadlers")


routeProducts = Router();

routeProducts.get("/", getAllProductsHandler) 

routeProducts.post("/", createProductsHandler)

routeProducts.get("/:orderType", filterByPriceHandler)


module.exports = {
    routeProducts
}