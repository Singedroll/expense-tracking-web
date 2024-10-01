import { categoryRouter } from "./router/category.router";
import express from "express";

const app = express();
import { sql } from "./database";
import { userRouter } from "./router/users.router";
import { transactionRouter } from "./router/transaction.router";

app.use(express.json());

const port = 5050;

app.use("/category", categoryRouter);
app.use("/user", userRouter);
app.use("/transaction", transactionRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
