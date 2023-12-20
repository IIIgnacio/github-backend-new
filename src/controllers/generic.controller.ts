import { Request, Response } from 'express'
import GenericModel from '../models/Generic'
// Asegúrate de que la ruta es correcta

export const createGeneric = async (req: Request, res: Response) => {
  try {
    const newItem = new GenericModel(req.body) // req.body contendrá los datos a insertar
    const savedItem = await newItem.save() // Guarda el nuevo item en la base de datos

    res.status(201).json({
      message: 'Item Created Successfully',
      item: savedItem,
    })
  } catch (error) {
    console.error('Error creating item:', error)
    res.status(500).json({
      message: 'Internal Server Error',
    })
  }
}

export const getGenerics = async (req: Request, res: Response) => {
  try {
    const generics = await GenericModel.find()
    res.status(201).json({
      message: 'Item Created Successfully',
      item: generics,
    })
  } catch (error) {
    console.error('Error creating item:', error)
    res.status(500).json({
      message: 'Internal Server Error',
    })
  }
}
