import { db } from "../config/connectDB";
import { Resource } from "../models/resource";

const getResources = async (filter?: string): Promise<Resource[]> => {
  const [rows] = await db.query("SELECT * FROM resources WHERE name LIKE ?", [
    `%${filter}%`,
  ]);
  return rows as Resource[];
};

const getResourceById = async (id: number): Promise<Resource | null> => {
  const [rows] = await db.query("SELECT * FROM resources WHERE id = ?", [id]);
  const resource = (rows as Resource[])[0];
  return resource || null;
};

const createResource = async (
  resource: Omit<Resource, "id">
): Promise<Resource> => {
  if (!resource.name || resource.name.trim() === "") {
    throw new Error("Name cannot be null or empty");
  }

  const [result] = await db.query(
    "INSERT INTO resources (name, description) VALUES (?, ?)",
    [resource.name, resource.description]
  );
  const insertId = (result as any).insertId;
  return { id: insertId, ...resource };
};

const updateResource = async (
  id: number,
  updatedResource: Omit<Resource, "id">
): Promise<Resource | null> => {
  if (!updatedResource.name || updatedResource.name.trim() === "") {
    throw new Error("Name cannot be null or empty");
  }

  await db.query(
    "UPDATE resources SET name = ?, description = ? WHERE id = ?",
    [updatedResource.name, updatedResource.description, id]
  );
  const resource = await getResourceById(id);
  return resource;
};

const deleteResource = async (id: number): Promise<boolean> => {
  const [result] = await db.query("DELETE FROM resources WHERE id = ?", [id]);
  return (result as any).affectedRows > 0;
};

export {
  createResource,
  getResources,
  getResourceById,
  updateResource,
  deleteResource,
};
