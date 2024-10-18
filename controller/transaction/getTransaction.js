import { response } from "express";
import { sql } from "../../database/index";

export const getTransaction = async (request, response) => {
  try {
    const transactions = await sql`SELECT * FROM transaction`;
    response.status(200).json({ message: "success", transactions });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "bad request" });
  }
};
