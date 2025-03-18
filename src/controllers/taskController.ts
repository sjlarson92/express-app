import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

type TaskRequest = {
    name: string;
    age: number;
}

export const createTask = async (req: Request<{}, {}, TaskRequest>, res: Response) => {
    const {name} = req.body

    const newTask = await prisma.task.create({
        data: {
            title: name,
            userId: 1
        }
    })
    res.status(201).json({message: `Task Created: ${name}`, data: newTask})
}

export const getAllTasks = async (req: Request, res: Response) => {
    const allTasks = await prisma.task.findMany()

    res.status(200).send({message: 'Get all Tasks', data: allTasks})
}

export const getTaskById = async (req: Request, res: Response) => {
    const {id} = req.params
    const task = await prisma.task.findUnique({where: {id: parseInt(id)}})
    res.status(200).send({
        message: `Get task with id: ${id}`, data: task
    })
}

export const updateTask = async (req: Request<{ id: string }, {}, TaskRequest>, res: Response) => {
    const {id} = req.params
    const {name} = req.body
    const updatedTask = await prisma.task.update({
        where: {
            id: parseInt(id)
        },
        data: {
            title: name,
        }
    })

    res.send({message: `Update task by id: ${id}`, data: updatedTask})
}

export const deleteTask = async (req: Request, res: Response) => {
    const {id} = req.params
    await prisma.task.delete({where: {id: parseInt(id)}})
    res.send({message: `Delete task by id: ${id}`})
}
