import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import tasksRoute from "./routes/tasksRoute";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/api/tasks', tasksRoute)

app.get("/", (req: Request, res: Response) => {
    res.send("RAMEN!!!!");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});