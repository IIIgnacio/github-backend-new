import express from "express";
import { connectDB } from "./src/mongoDB/mongoConnection";
import mainRouter from "./src/routes/users.routes";
import cors from "cors";
import repoRouter from "./src/routes/repo.routes";

const PORT = process.env.PORT || 8000;

const app = express();
connectDB();
app.use(express.json());
app.use(cors());

app.use(mainRouter);
app.use(repoRouter);

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
