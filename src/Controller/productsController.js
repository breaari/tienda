const { Product } = require("../db");

const getAllProductsController = async () => {

    try {
        const responseDB = await Product.findAll()
        console.log("responseDB:", responseDB)
        return responseDB
    } catch (error) {
        console.error("Database error")
    }
}

const createProductController = async ({ image, name, price, brand, size, type, color, genre }) => {
    try {
        const newProduct = await Product.create({ 
            image,
            name,
            price,
            brand,
            size,
            type,
            color,
            genre
        });
        return newProduct;
    } catch (error) {
        // Manejar cualquier error aquí
        console.error("Error creating product:", error);
        throw new Error("Error creating product: " + error.message);
    }
};

module.exports = { 
    getAllProductsController,
    createProductController
}