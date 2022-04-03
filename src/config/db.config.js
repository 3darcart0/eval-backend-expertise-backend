// import { config } from "dotenv";
// config();{
// export const port = process.env.PORT || 3000;
module.exports = {
  connectionLimit: 10,
  host: process.env.DATABASE_HOST || "localhost",
  user: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "secret",
  database: process.env.DATABASE_NAME || "eval_backend_expertise",
  port: process.env.DATABASE_PORT || 3306
};