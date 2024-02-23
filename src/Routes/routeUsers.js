const { Router } = require('express');
const { getAllUsersHandler, createUsersHandler } = require("../Handlers/usersHandlers")


routeUsers = Router();

routeUsers.get("/", getAllUsersHandler) 

routeUsers.post("/", createUsersHandler)




module.exports = {
    routeUsers
}