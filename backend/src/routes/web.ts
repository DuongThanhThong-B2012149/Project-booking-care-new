import express, { Express } from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

const router = express.Router();

const initWebRouters = (app: Express) => {
  // Learning
  router.get("/", homeController.getHomePage);

  router.get("/about", (req, res) => {
    return res.send("Hello world 1");
  });

  router.get("/crud", homeController.getCRUD);
  router.get("/create-crud", homeController.createCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);

  // Working
  router.post("/api/login", userController.handleLogin);
  router.post("/api/create-new-user", userController.handleCreateNewUser);
  router.put("/api/edit-user", userController.handleEditUser);
  router.delete("/api/delete-user/:id", userController.handleDeleteUser);
  router.get("/api/get-all-users", userController.handleGetAllUsers);
  router.get("/api/get-detail-user/:id", userController.handleGetUser);

  router.get("/api/allcode", userController.getAllCode);

  return app.use("/", router);
};
export default initWebRouters;
