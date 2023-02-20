import { Request, Response } from "express";
const db = require("../models/index");
const CRUDServices = require("../services/CRUDServices");
const homeController = {
  getHomePage: async (req: Request, res: Response) => {
    try {
      const data = await db.User.findAll();

      return res.render("homepage.ejs", {
        data: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  },
  createCRUD: async (req: Request, res: Response) => {
    return res.render("crud.ejs");
  },
  getCRUD: async (req: Request, res: Response) => {
    const data = await CRUDServices.readAlluser();
    return res.render("displayCRUD.ejs", {
      dataTable: data,
    });
  },
  postCRUD: async (req: Request, res: Response) => {
    const message = await CRUDServices.createNewUser(req.body);
    return res.send(message);
  },
  getEditCRUD: async (req: Request, res: Response) => {
    const userId = req.query.id;
    if (userId) {
      const userData = await CRUDServices.getUserInfoById(userId);
      // Check user data not found

      return res.render("editCRUD.ejs", {
        user: userData,
      });
    } else {
      return res.send("User not found!");
    }
  },
  putCRUD: async (req: Request, res: Response) => {
    const data = req.body;
    const allusers = await CRUDServices.updateUserData(data);
    return res.redirect("/crud");
  },

  deleteCRUD: async (req: Request, res: Response) => {
    const id = req.query.id;
    if (id) {
      await CRUDServices.deleteUserById(id);

      return res.send("Delete the user succeed");
    } else {
      return res.send("User not found");
    }
  },
};

export default homeController;
