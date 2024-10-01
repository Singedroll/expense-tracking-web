import express, { request, response } from "express";
import { getTransaction } from "../controller/transaction/getTransaction";
import { addTransaction } from "../controller/transaction/addTransaction";

export const transactionRouter = express.Router();

transactionRouter.get("/", getTransaction);
transactionRouter.post("/", addTransaction);
