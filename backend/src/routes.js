const express = require("express");
const cors = require("cors");
const UserController = require("./controllers/userController");
const BusinessController = require("./controllers/businessController");

const routes = express.Router();

const connection = require("./database/connection");
const multer = require("multer");
const uploadConfig = require("../src/config/upload");
const upload = multer(uploadConfig);

routes.use(cors());

routes.get("/users", UserController.index);

routes.get("/users/:id", UserController.user);

routes.post("/users", UserController.create);

routes.delete("/users/:id", UserController.delete);

routes.put("/users/:id", UserController.update);

routes.get("/photo", BusinessController.indexPhoto);

routes.post("/photo", upload.single("image"), async (request, response) => {
  console.log(request);

  return response.status(200).send();
});

routes.get("/business", BusinessController.index);

routes.get("/business/:id", BusinessController.negocio);

routes.post("/business", BusinessController.create);

routes.delete("/business/:id", BusinessController.delete);

routes.put("/business/:id", BusinessController.update);

module.exports = routes;
