import { sql } from "../../database/index";

export const addTransaction = async (request, response) => {
  const {
    name,
    amount,
    transaction_type,
    description,
    user_id,
    category_id,
    currency_type,
  } = request.body;

  try {
    await sql`INSERT INTO transaction (name, amount, transaction_type, description, user_id, category_id, currency_type)
      VALUES (${name},${amount},${transaction_type},${description},${user_id},${category_id},${currency_type})`;

    response.status(200).json({ order: request.body });
  } catch (error) {
    console.error("Error adding transaction:", error);
    response.status(400).json({ message: "Bad request", error });
  }
};
