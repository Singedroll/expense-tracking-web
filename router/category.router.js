import express, { request, response } from "express";
import { getCategory } from "../controller/category/getCategory";
import { addCategory } from "../controller/category/addCategory";
import { updateCategory } from "../controller/category/updateCategory";
import { deleteCategory } from "../controller/category/deleteCategory";
export const categoryRouter = express.Router();

categoryRouter.get("/", getCategory);
categoryRouter.post("/", addCategory);
categoryRouter.put("/", updateCategory);
categoryRouter.delete("/", deleteCategory);
