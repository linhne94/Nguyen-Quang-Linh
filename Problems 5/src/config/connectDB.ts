import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
});

const checkConnection = async () => {
  try {
    const connection = await db.getConnection();
    console.log("Database connected successfully!");
    connection.release(); // Trả lại kết nối vào pool
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

export { checkConnection, db };
