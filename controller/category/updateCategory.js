import { sql } from "../../database";
import { response } from "express";

export const updateCategory = async (request, response) => {
  const { name, description, category_image, id } = request.body;

  try {
    await sql`UPDATE category
      SET name = ${name}, description = ${description}, category_image=${category_image}
      WHERE id=${id}`;
    response.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);

    response
      .status(400)
      .json({ message: "bad request", category: request.body });
  }
};
