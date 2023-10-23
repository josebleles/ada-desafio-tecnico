import 'express-async-errors';
import './models/RequestExtension'
import express, { Request, Response } from 'express';
import { controllers } from './controllers';
import { corsMiddleware } from './middlewares/cors';


let app = express();
app.use(corsMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/",(req: Request, res : Response) =>{
    res.json({date:new Date()});
});

app.use("/login", controllers.AuthController)
app.use("/cards", controllers.CardController)


export default app;

