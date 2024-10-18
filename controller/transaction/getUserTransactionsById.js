import { sql } from "../../database/index";

export const addTransactionById = async (request, response) => {
  const { userid } = request.body;

  try {
    const getUserTrans =
      await sql`SELECT users.name as "userName", category.name as "categoryName", transaction.createdat as "categoryDate", transaction.updateat as "categoryUpdate" ,*
    FROM transaction
    INNER JOIN category ON transaction.category_id = category.id
    INNER JOIN users ON transaction.user_id = users.id
    Where transaction.user_id = ${userid}
    Order by transaction.createdat DESC
`;

    response.status(200).json({ getUserTrans });
  } catch (error) {
    // console.error("Error addTransactionById transaction:", error);
    response.status(400).json({ message: "Bad request", error });
  }
};

export const getSum = async (request, response) => {
  const { userid, type } = request.body;
  try {
    const sum = await sql`SELECT SUM(amount) from transaction
          where transaction_type = ${type}  AND user_id = ${userid}`;
    response.status(200).json(sum);
  } catch (error) {
    response.status(400).json(error);
  }
};
