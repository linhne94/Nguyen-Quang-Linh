import { Request, Response } from "express";
import {
  createResource,
  deleteResource,
  getResourceById,
  getResources,
  updateResource,
} from "../services/resourceService";

const getResourcesController = async (req: Request, res: Response) => {
  const filter = req.query.filter as string;
  const resources = await getResources(filter);
  res.status(200).json(resources);
};

const getResourceByIdController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const resource = await getResourceById(id);
  if (resource) {
    res.status(200).json(resource);
  } else {
    res.status(404).send("Resource not found");
  }
};

const createResourceController = async (req: Request, res: Response) => {
  try {
    const newResource = await createResource(req.body);
    res.status(201).json(newResource);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "An unknown error occurred" });
    }
  }
};

const updateResourceController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const updatedResource = await updateResource(id, req.body);
    if (updatedResource) {
      res.json(updatedResource);
    } else {
      res.status(404).json({ message: "Resource not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "An unknown error occurred" });
    }
  }
};

const deleteResourceController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const isDeleted = await deleteResource(id);
  if (isDeleted) {
    res.status(200).send("Deleted successfully");
  } else {
    res.status(404).send("Resource not found");
  }
};

export {
  createResourceController,
  getResourcesController,
  getResourceByIdController,
  updateResourceController,
  deleteResourceController,
};
