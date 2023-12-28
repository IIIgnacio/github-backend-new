import { Router } from "express";
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/users.controller";
const mainRouter = Router();

// User Routes

mainRouter.get("/user", getAllUsers); 
mainRouter.get("/user/:username", getUser); 
mainRouter.post("/user", createUser); 
mainRouter.put("/user/:id", updateUser); 
mainRouter.delete("/user/:id", deleteUser); 

export default mainRouter;
