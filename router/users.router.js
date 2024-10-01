import express, { request, response } from "express";
import { getUsers } from "../controller/users/getUsers";
import { addUsers } from "../controller/users/addUsers";
import { editUsers } from "../controller/users/updateUsers";
import { deleteUsers } from "../controller/users/deleteUsers";

export const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", addUsers);
userRouter.put("/", editUsers);
userRouter.delete("/", deleteUsers);
