import { MongoClient, ServerApiVersion } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

const URL = process.env.URL || '';

export const connectDB = async () => {
  const client = new MongoClient(URL, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  async function run() {
    try {
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("MongoDB connected successfully!");
    } finally {
      console.log('')
      await client.close();
    }
  }
  run().catch(console.dir);
};
