import { getDBConnection } from "./db.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { id } = req.query;

  const getCC = "SELECT * FROM credit_cards WHERE id = ?";

  try {
    const db = await getDBConnection();
    const [results] = await db.execute(getCC, [id]);
    await db.end();

    return res.status(200).json(results);
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ message: "Server is Unreachable ..." });
  }
}
