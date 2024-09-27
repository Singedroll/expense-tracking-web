import { expenseTracker } from "./router/expense.tracker";
import express from "express";

const app = express();
import { sql } from "./database";

app.use(express.json());

const port = 5050;

app.use("/exptrack", expTrackRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
