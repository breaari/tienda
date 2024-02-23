const { Router } = require('express');
const { routeProducts } = require("./routeProducts")
const { routeUsers } = require("./routeUsers")

const routePrincipal = Router();

routePrincipal.use("/products", routeProducts)
routePrincipal.use("/users", routeUsers )



module.exports = {
    routePrincipal
}