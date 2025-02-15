import express from "express";
import {
  createResourceController,
  deleteResourceController,
  getResourceByIdController,
  getResourcesController,
  updateResourceController,
} from "../controllers/resourceController";

const resourceRoutes = express.Router();

resourceRoutes.post("/", createResourceController);
resourceRoutes.get("/", getResourcesController);
resourceRoutes.get("/:id", getResourceByIdController);
resourceRoutes.put("/:id", updateResourceController);
resourceRoutes.delete("/:id", deleteResourceController);

export default resourceRoutes;
