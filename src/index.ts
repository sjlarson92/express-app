import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import tasksRoute from "./routes/tasksRoute";

// loads environment variables from .env file
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// custom middleware logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`)
    // must manually call next b/c this is a custom middleware
    next()
})

// built in middleware to handle urlencoded data/form data
app.use(express.urlencoded({extended: false}))

// built in middleware to handle json data
app.use(express.json())

app.use('/api/tasks', tasksRoute)

app.get("/", (req: Request, res: Response) => {
    res.send("RAMEN!!!!");
});

// the next() allows methods to be chained together
app.get('/chain', (req, res, next) => {
    console.log('using next()')
    next()
}, (req, res) => {
    res.send('I am the next function in the chain')
})

// can use regex within the route, this one will catch all routes after the above route
app.get('/*', (req, res) => {
    res.status(404).send('404')
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});