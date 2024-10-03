import { sql } from "../../database";
import { request } from "express";
export const deleteUsers = async (request, response) => {
  const { id } = request.body;
  response.status(200).json({
    messege: "Deleted succesfully! There is no going back now. ha ha ha",
  });
  try {
    await sql`DELETE FROM users
    WHERE id=${id}`;
  } catch (error) {
    console.log(error);
    response.status(400).json({ messege: "bad request" });
  }
};
