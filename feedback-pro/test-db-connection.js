import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();  // Ensure dotenv is loading your .env variables

const client = new Client({
  connectionString: process.env.DATABASE_URL,  // Make sure DATABASE_URL is correct
});

client.connect()
  .then(() => {
    console.log("Connected to the database successfully!");
    client.end();
  })
  .catch(err => {
    console.error("Error connecting to the database:", err);
  });
