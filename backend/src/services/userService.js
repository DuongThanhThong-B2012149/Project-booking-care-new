const db = require("../models/index");
const bcrypt = require("bcryptjs");
const hashPassword = require("../utils/hashPassword");
// "query": { "raw": true },
const userServices = {
  login: async (email, password) => {
    try {
      const user = await db.User.findOne({
        where: { email },
        attributes: ["email", "roleId", "password", "firstName", "lastName"],
        raw: true,
      });

      if (!email || !password)
        return {
          data: null,
          errCode: 1,
          statusCode: 400,
          message: "Missing inputs parameter",
        };

      // Check user exist
      if (!user)
        return {
          errCode: 2,
          data: null,
          statusCode: 400,
          message: "Your email doesn't exist. Please try other email",
        };

      // Compare password
      const isCheckPassword = bcrypt.compareSync(password, user.password);

      if (!isCheckPassword)
        return {
          errCode: 3,
          statusCode: 400,
          data: null,
          message: "Incorrect password. Please try again",
        };

      // Delete some fiels
      delete user.password;

      return {
        errCode: 0,
        statusCode: 200,
        data: user,
        message: "Login success",
      };
    } catch (error) {
      console.log(error);
      return {
        errCode: 4,
        statusCode: 500,
        data: null,
        message: "Login error",
      };
    }
  },
  getAllUsers: async () => {
    try {
      const users = await db.User.findAll({
        attributes: {
          exclude: ["password"],
        },
      });

      return {
        errCode: 0,
        statusCode: 200,
        data: users,
        message: "Get user success",
      };
    } catch (error) {
      return {
        errCode: 1,
        statusCode: 500,
        data: null,
        message: "Get all users error",
      };
    }
  },
  getUser: async (id) => {
    try {
      if (!id)
        return {
          errCode: 1,
          statusCode: 500,
          data: null,
          message: "Missing parameter!",
        };

      const user = await db.User.findOne({
        where: { id },
        attributes: {
          exclude: ["password"],
        },
      });

      return {
        errCode: 0,
        statusCode: 200,
        data: user,
        message: "Get user success",
      };
    } catch (error) {
      return {
        errCode: 2,
        statusCode: 500,
        data: null,
        message: "Get all users error",
      };
    }
  },
  createUser: async (data) => {
    try {
      if (!data.email || !data.password)
        return {
          data: null,
          errCode: 1,
          statusCode: 400,
          message: "Missing inputs parameter",
        };

      const userExisted = await db.User.findOne({
        where: { email: data.email },
      });

      if (userExisted)
        return {
          data: null,
          errCode: 2,
          statusCode: 400,
          message: "Your email is already in used, Please try another email",
        };
      const hashPasswordFromBcrypt = hashPassword(data.password);

      const newUser = await db.User.create({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashPasswordFromBcrypt,
        phoneNumber: data.phoneNumber,
        address: data.address,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
      });

      return {
        errCode: 0,
        statusCode: 200,
        data: newUser,
        message: "Create new user successfully",
      };
    } catch (error) {
      console.log(error);
      return {
        errCode: 3,
        statusCode: 500,
        data: null,
        message: "Create user error",
      };
    }
  },
  editUser: async (data) => {
    try {
      const updateUser = await db.User.findOne({
        where: { id: data.id },
        raw: false,
      });

      if (updateUser) {
        updateUser.firstName = data.firstName;
        updateUser.lastName = data.lastName;
        updateUser.address = data.address;
        await updateUser.save();
        const userUpdated = await db.User.findOne({ where: { id: data.id } });
        return {
          errCode: 0,
          statusCode: 200,
          data: userUpdated,
          message: "Edit success",
        };
      } else {
        return {
          errCode: 1,
          statusCode: 400,
          data: null,
          message: "User not exist",
        };
      }
    } catch (error) {
      console.log(error);
      return {
        errCode: 2,
        statusCode: 500,
        data: null,
        message: "Edit user error",
      };
    }
  },
  deleteUser: async (id) => {
    try {
      const deleteUser = await db.User.findOne({ where: { id } });
      if (deleteUser) {
        await db.User.destroy({ where: { id } });

        return {
          errCode: 0,
          statusCode: 200,
          data: deleteUser,
          message: "Delete success",
        };
      } else {
        return {
          errCode: 1,
          statusCode: 400,
          data: null,
          message: "User not exist",
        };
      }
    } catch (error) {
      console.log(error);
      return {
        errCode: 2,
        statusCode: 500,
        data: null,
        message: "Delete user error",
      };
    }
  },

  getCodes: async (typeInput) => {
    try {
      if (!typeInput)
        return {
          errCode: 1,
          statusCode: 400,
          data: null,
          message: "Missing type parameter",
        };
      const allCodes = await db.Allcode.findAll({
        where: { type: typeInput },
      });
      return {
        errCode: 0,
        statusCode: 200,
        data: allCodes,
        message: "Get All Code success",
      };
    } catch (error) {
      return {
        errCode: 2,
        statusCode: 500,
        data: null,
        message: "Get allAll Code error",
      };
    }
  },
};

module.exports = userServices;
