const { Router } = require('express');
const { getAllProductsHandler, createProductsHandler, filterByPriceHandler, filterByTypeHandler, filterByBrandHandler} = require("../Handlers/productsHadlers")


routeProducts = Router();

routeProducts.get("/", getAllProductsHandler) 

routeProducts.post("/", createProductsHandler)

routeProducts.get("price/:orderType", filterByPriceHandler)

routeProducts.get("/filterType/:filterByType", filterByTypeHandler)

routeProducts.get("/filterBrand/:filterByBrand", filterByBrandHandler)



module.exports = {
    routeProducts
}