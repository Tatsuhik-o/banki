import { getDBConnection } from "./db";
export default async function handler(request, response) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const getTransactions = "SELECT * FROM transactions";

  console.log("So Far so Good");

  try {
    const db = await getDBConnection();
    console.log(db);
    const [results] = await db.execute(getTransactions);
    await db.end();
    return res.status(200).json(results);
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ message: "Server is Unreachable ..." });
  }
}
