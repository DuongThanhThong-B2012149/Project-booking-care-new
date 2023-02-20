import { Request, Response } from "express";
const db = require("../models/index");
const userServices = require("../services/userService");
const userController = {
  handleLogin: async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;

    const results = await userServices.login(email, password);
    return res.status(results.statusCode).json(results);
  },
  handleGetAllUsers: async (req: Request, res: Response) => {
    const results = await userServices.getAllUsers();

    return res.status(results.statusCode).json(results);
  },
  handleGetUser: async (req: Request, res: Response) => {
    const id = req.params.id;
    const results = await userServices.getUser(id);

    return res.status(results.statusCode).json(results);
  },
  handleCreateNewUser: async (req: Request, res: Response) => {
    const results = await userServices.createUser(req.body);
    return res.status(results.statusCode).json(results);
  },
  handleEditUser: async (req: Request, res: Response) => {
    const results = await userServices.editUser(req.body);
    return res.status(results.statusCode).json(results);
  },
  handleDeleteUser: async (req: Request, res: Response) => {
    const results = await userServices.deleteUser(req.params.id);
    return res.status(results.statusCode).json(results);
  },

  getAllCode: async (req: Request, res: Response) => {
    const results = await userServices.getCodes(req.query.type);
    return res.status(results.statusCode).json(results);
  },
};

export default userController;
