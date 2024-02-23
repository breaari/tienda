const { Users } = require("../db");

const getAllUsersControllers = async () => {
  try {
    const responseDB = await Users.findAll();

    return responseDB;
  } catch (error) {
    console.error("Database error");
  }
};
const createUsersControllers = async ({
  image,
  name,
  surname,
  email,
  phone,
}) => {
  try {
    const newUser = await Users.create({ image, name, surname, email, phone });
    return newUser;
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

module.exports = {
  getAllUsersControllers,
  createUsersControllers,
};
