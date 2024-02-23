const {
  getAllUsersControllers,
  createUsersControllers,
} = require("../Controller/usersControllers");

const getAllUsersHandler = async (req, res) => {
  try {
    const responseController = await getAllUsersControllers();
    res.status(200).json(responseController);
  } catch (error) {
    res.status(404).send("Not find User");
  }
};

const createUsersHandler = async (req, res) => {
  const { image, name, surname, email, phone } = req.body;
  try {
    const responseController = await createUsersControllers({
      image,
      name,
      surname,
      email,
      phone,
    });
    res.status(201).json(responseController);
  } catch (error) {
    res.status(417).send("Error creating user");
  }
};

module.exports = {
  getAllUsersHandler,
  createUsersHandler,
};
