import { response } from "express";
import { sql } from "../../database/index";

export const addCategory = async (request, response) => {
  const { name, description, category_image } = request.body;
  console.log(request.body);

  try {
    await sql`INSERT INTO category (name, description, category_image)
      VALUES (${name},${description},${category_image})`;
    console.log(request.body);
    response.status(200).json({ category: request.body });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "bad request" });
  }
};
