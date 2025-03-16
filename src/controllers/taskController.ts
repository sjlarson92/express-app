import {Request, Response} from "express";

export const createTask = (req: Request, res: Response) => {
    res.send('Task Created')
}

export const getAllTasks = (req: Request, res: Response) => {
    res.send('Get all Tasks')
}

export const getTaskById = (req: Request, res: Response) => {
    res.send('Get task by id')
}

export const updateTask = (req: Request, res: Response) => {
    res.send('Update task by id')
}

export const deleteTask = (req: Request, res: Response) => {
    res.send('Delete task by id')
}
