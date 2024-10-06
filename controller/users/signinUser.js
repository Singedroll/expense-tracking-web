import { response } from "express";
import { sql } from "../../database/index";

export const signInUser = async (request, response) => {
  const { email, password } = request.body;
  console.log(request.body);
  try {
    const myuser = await sql`SELECT * FROM users
      WHERE email = ${email} AND password = ${password}`;
    response.status(200).json({ myuser });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error });
  }
};
