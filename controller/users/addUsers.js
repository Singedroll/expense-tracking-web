import { response } from "express";
import { sql } from "../../database/index";

export const addUsers = async (request, response) => {
  const { email, name, password, avatar_img } = request.body;

  try {
    await sql`INSERT INTO users (name, email, password, avatar_img)
      VALUES (${name},${email},${password},${avatar_img})`;
    console.log(request.body);
    response.status(200).json({ users: request.body });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "bad request" });
  }
};
