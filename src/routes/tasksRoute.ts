import {Router} from 'express';
import {createTask, deleteTask, getAllTasks, getTaskById, updateTask} from "../controllers/taskController";

const router = Router()

router.route('/')
    .post(createTask)
    .get(getAllTasks)

router.route('/:id')
    .get(getTaskById)
    .put(updateTask)
    .delete(deleteTask)

export default router;