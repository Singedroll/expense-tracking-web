import { response } from "express";
import { sql } from "../../database/index";

export const getCategory = async (request, response) => {
  try {
    const category = await sql`SELECT * FROM category`;
    console.log("j");
    response.status(200).json({ messege: "success", category });
  } catch (error) {
    // console.log(error);
    response.status(400).json({ message: "bad request" });
  }
};
