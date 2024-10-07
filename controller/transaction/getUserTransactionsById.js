import { sql } from "../../database/index";

export const addTransactionById = async (request, response) => {
  const { userid } = request.body;
  try {
    const getUserTrans = await sql`SELECT *
    FROM transaction
    INNER JOIN category ON transaction.category_id = category.id
    INNER JOIN users ON transaction.user_id = users.id
    Where transaction.user_id = ${userid}`;

    response.status(200).json({ getUserTrans });
  } catch (error) {
    console.error("Error adding transaction:", error);
    response.status(400).json({ message: "Bad request", error });
  }
};
