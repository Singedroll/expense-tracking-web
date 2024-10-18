import { response } from "express";
import { sql } from "../../database/index";

export const signInUser = async (request, response) => {
  const { email, password } = request.body;

  try {
    const user = await sql`SELECT * FROM users
      WHERE email = ${email} AND password = ${password}`;
    if (user[0]) {
      response.status(200).json({ myuser: user[0] });
    }
    response.status(400).json({ message: "user not found" });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error });
  }
};
