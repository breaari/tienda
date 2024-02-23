const { Router } = require('express');
const { routeProducts } = require("./routeProducts")


const routePrincipal = Router();

routePrincipal.use("/products", routeProducts)


module.exports = {
    routePrincipal
}