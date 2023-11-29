import { Request, Response } from "express";
import axios from 'axios';

export const getAllRepositories = async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://api.github.com/repositories');

    const repositories = response.data;

    res.json({
      message: 'Request Successful',
      repositories,
    });
  } catch (error) {
    console.error('Error making GitHub API request:', error);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};


export const createRepository = async (req: Request, res: Response) => {
  try {
    res.status(201).json({
      message: 'Repository Created',
    });
  } catch (error) {
    console.error('Error making GitHub API request:', error);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};


export const updateRepository = async (req: Request, res: Response) => {
    try {
      res.json({
        message: 'Repository Updated',
      });
    } catch (error) {
      console.error('Error making GitHub API request:', error);
      res.status(500).json({
        message: 'Internal Server Error',
      });
    }
  };
  
  export const deleteRepository = async (req: Request, res: Response) => {
    try {
      res.json({
        message: 'Repository Deleted',
      });
    } catch (error) {
      console.error('Error making GitHub API request:', error);
      res.status(500).json({
        message: 'Internal Server Error',
      });
    }
  };