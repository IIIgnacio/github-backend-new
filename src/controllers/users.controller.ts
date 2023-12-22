import { Request, Response } from "express";
import axios from "axios";
import { UserModel } from "../models/User";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const response = await axios.get("https://api.github.com/users");

    const users = response.data;

    res.json({
      message: "Request Successful",
      users,
    });
  } catch (error) {
    console.error("Error making GitHub API request:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const username = req.params.username;

    if (!username) {
      return res.status(400).json({
        message: "Error: Debes proporcionar un nombre de usuario.",
      });
    }

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const user = await UserModel.create({
      name: response.data.name || response.data.login,      
    });

    console.log(user);

    res.json({
      message: "Success",
      user,
    });
  } catch (error) {
    console.error("Error making the API request:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const createUser = (req: Request, res: Response) => {
  const data = req.body;

  res.json({
    message: "Created",
  });
};

export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    message: "Updated",
  });
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    message: "Deleted",
  });
};
