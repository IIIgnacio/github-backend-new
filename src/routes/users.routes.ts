import { Router } from "express";
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/users.controller";
import { getAllRepositories, deleteRepository, updateRepository, createRepository } from "../controllers/repo.controller"
const mainRouter = Router();

// User Routes

mainRouter.get("/user", getAllUsers); 
mainRouter.get("/user/:id", getUser); 
mainRouter.post("/user", createUser); 
mainRouter.put("/user/:id", updateUser); 
mainRouter.delete("/user/:id", deleteUser); 

// Repo Routes
mainRouter.get("/repos", getAllRepositories)
mainRouter.post("/repos", createRepository)
mainRouter.put("/repo/:id", updateRepository)
mainRouter.delete("/repo/:id", deleteRepository)
export default mainRouter;
