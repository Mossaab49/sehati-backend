import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

// Database connection
const pool = new Pool({
  connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ep-mute-leaf-agfxfhu8-pooler.c-2.eu-central-1.aws.neon.tech/${process.env.DB_NAME}?sslmode=require&channel_binding=require`,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;