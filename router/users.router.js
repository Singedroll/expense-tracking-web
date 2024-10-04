import express, { request, response } from "express";
import { getUsers } from "../controller/users/getUsers";
import { addUsers } from "../controller/users/addUsers";
import { editUsers } from "../controller/users/updateUsers";
import { deleteUsers } from "../controller/users/deleteUsers";
import { signInUser } from "../controller/users/signinUser";

export const userRouter = express.Router();

userRouter
  .get("/", getUsers)
  .post("/", addUsers)
  .put("/", editUsers)
  .delete("/", deleteUsers)
  .post("/signin", signInUser);
