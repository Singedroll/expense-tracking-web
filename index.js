import { categoryRouter } from "./router/category.router";
import express from "express";
import { userRouter } from "./router/users.router";
import { transactionRouter } from "./router/transaction.router";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = 5050;

app.use("/category", categoryRouter);
app.use("/user", userRouter);
app.use("/transaction", transactionRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
