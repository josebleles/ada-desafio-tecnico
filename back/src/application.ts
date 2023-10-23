import 'express-async-errors';
import './models/api/ExpressExtensions';
import express, { Request, Response } from 'express';
import { controllers } from './controllers';
import { corsMiddleware } from './middlewares/cors';


let app = express();
app.use(corsMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/check_version",(req: Request, res : Response) =>{
    res.json({version:process.env.VERSION});
});

app.use("/login", controllers.AuthController)
app.use("/cards", controllers.CardController)


export default app;

