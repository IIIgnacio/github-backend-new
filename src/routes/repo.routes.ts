import { Router } from "express";
import {
  getAllRepositories,
  deleteRepository,
  updateRepository,
  createRepository,
} from "../controllers/repo.controller";

const repoRouter = Router();

// Repo Routes
repoRouter
  .get("/repos/:name", getAllRepositories)
  .post("/repos", createRepository)
  .put("/repo/:id", updateRepository)
  .delete("/repo/:id", deleteRepository);

export default repoRouter;
