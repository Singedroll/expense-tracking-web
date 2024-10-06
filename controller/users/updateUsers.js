import { sql } from "../../database";
import { response } from "express";

export const editUsers = async (request, response) => {
  const { name, email, password, avatar_img, id } = request.body;

  try {
    await sql`UPDATE users
      SET name = ${name}, email = ${email}, password=${password}, avatar_img=${avatar_img}
      WHERE id=${id}`;
    response.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);

    response.status(400).json({ message: "bad request" });
  }
};
