const { Router } = require('express');
const { getAllProductsHandler, createProductsHandler, filterByPriceHandler, filterByAlphabeticallyHandler, filterByGenreHandler,  } = require("../Handlers/productsHadlers")


routeProducts = Router();


routeProducts.get("/", getAllProductsHandler) 

routeProducts.post("/", createProductsHandler)

routeProducts.get("/price/:orderType", filterByPriceHandler)

routeProducts.get("/alphabetically/:orderAlphabetically", filterByAlphabeticallyHandler)

routeProducts.get("/genre/:typeGenre",filterByGenreHandler )


module.exports = {
    routeProducts
}