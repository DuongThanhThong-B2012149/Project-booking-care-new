const db = require("../models/index");
const hashPassword = require("../utils/hashPassword");
const CRUDServices = {
  createNewUser: async (data) => {
    try {
      const hashPasswordFromBcrypt = hashPassword(data.password);

      await db.User.create({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashPasswordFromBcrypt,
        phoneNumber: data.phoneNumber,
        address: data.address,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
      });

      return "Ok! Create user successfully";
    } catch (error) {
      console.log(error);
      return "Error! Doesn't create user";
    }
  },

  readAlluser: async () => {
    try {
      const users = await db.User.findAll({ raw: true });
      return users;
    } catch (error) {
      console.log(error);
      return "Error! Doesn't get all users";
    }
  },

  getUserInfoById: async (id) => {
    try {
      const user = await db.User.findOne({ raw: true, where: { id } });

      return user;
    } catch (error) {
      console.log(error);
      return "Error! Doesn't get user";
    }
  },

  updateUserData: async (data) => {
    try {
      const user = await db.User.findOne({ where: { id: data.id } });
      if (user) {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;

        await user.save();

        const allUsers = await db.User.findAll();
        return allUsers;
      } else {
        return "";
      }
    } catch (error) {
      console.log(error);
    }
  },

  deleteUserById: async (id) => {
    try {
      const user = await db.User.findOne({ where: { id } });

      if (user) {
        await user.destroy();
      }
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = CRUDServices;
