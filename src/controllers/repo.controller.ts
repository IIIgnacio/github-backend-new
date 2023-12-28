import { Request, Response } from "express";
import axios from "axios";

export const getAllRepositories = async (req: Request, res: Response) => {
  try {
    const name = await req.params.name;

    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${name}`
    );

    const data = response.data;

    const repositories = {
      totalCount: data.total_count,
      result: data.items.map((repo: any) => ({
        name: repo.name,
        owner: repo.owner.login,
        html_url: repo.html_url,
      })),
    };
    res.json({
      message: "Request Successful",
      repositories,
    });
  } catch (error) {
    console.error("Error making GitHub API request:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const createRepository = async (req: Request, res: Response) => {
  try {
    res.status(201).json({
      message: "Repository Created",
    });
  } catch (error) {
    console.error("Error making GitHub API request:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const updateRepository = async (req: Request, res: Response) => {
  try {
    res.json({
      message: "Repository Updated",
    });
  } catch (error) {
    console.error("Error making GitHub API request:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const deleteRepository = async (req: Request, res: Response) => {
  try {
    res.json({
      message: "Repository Deleted",
    });
  } catch (error) {
    console.error("Error making GitHub API request:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
