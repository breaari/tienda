const {
  getAllUsersControllers,
  createUsersControllers,
  changeEmailControllers,
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

const changeEmailHandler = async (req, res) => {
  const { userId } = req.params;
  const { newEmail } = req.query;

  try {
    const updatedUser = await changeEmailControllers(userId, newEmail);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error changing user email:", error.message);
    res.status(501).json({ error: "Error changing user email" });
  }
};

module.exports = {
  getAllUsersHandler,
  createUsersHandler,
  changeEmailHandler,
};
