import { response } from "express";
import { sql } from "../../database/index";

export const getTransaction = async (request, response) => {
  try {
    const transaction = await sql`SELECT * FROM transaction`;
    console.log("j");
    response.status(200).json({ message: "success", transaction });
  } catch (error) {
    // console.log(error);
    response.status(400).json({ message: "bad request" });
  }
};
