const { Router } = require('express');
const { getAllUsersHandler, createUsersHandler, changeEmailHandler } = require("../Handlers/usersHandlers")


routeUsers = Router();

routeUsers.get("/", getAllUsersHandler) 

routeUsers.post("/", createUsersHandler)

routeUsers.put("/", changeEmailHandler)


module.exports = {
    routeUsers
}