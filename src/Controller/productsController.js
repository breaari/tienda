const { Products } = require("../db")


const getAllProductsController = async () => {

    try {
        const responseDB = await Products.findAll()
        return responseDB
    } catch (error) {
        console.error("Database error")
    }
}


module.exports = { 
    getAllProductsController
}