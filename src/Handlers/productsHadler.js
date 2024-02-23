const { getAllProductsController, createProductController } = require("../Controller/productsController")

const getAllProductsHandler = async (req, res) => {
    try {

        const responseController = await getAllProductsController();
        res.status(200).json(responseController)
 
    } catch (error) {
        res.status(404).send("Not find products", error);
    }

}

const createProductsHandler = async (req, res) => {
    const {
        id,
        image,
        name,
        price,
        brand,
        size,
        type,
        color,
        genre
    } = req.body

    try {

        const responseController = await createProductController({
            id,
            image,
            name,
            price,
            brand,
            size,
            type,
            color,
            genre
        });
        res.status(200).json(responseController)
 
    } catch (error) {
        res.status(404).send("Not find products", error);
    }

}



module.exports = {
    getAllProductsHandler,
    createProductsHandler
}