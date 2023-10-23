import { Request, Response, Router } from "express";
import { CardBO } from "../services/bo/CardBO";
import { AuthMiddleware } from "../middlewares/auth";

let CardController = Router();

CardController.use(AuthMiddleware)
CardController.get("/", async (req : Request, res : Response) => {
    let userId = 1; //Number(req.userId);
    const user = await CardBO.getAllByUser(Number(userId));


    res.json(user);
})

CardController.get("/:id", async (req : Request, res : Response) => {
    let userId = 1; //Number(req.userId);
    let {id} = req.params; 
    const user = await CardBO.getById(Number(id));


    res.json(user);
})

CardController.post("/", async (req : Request, res : Response) => {
    let card = req.body; 
    card.userId = 1; //Number(req.userId);
    const user = await CardBO.insert(card);


    res.json(user);
})

CardController.put("/", async (req : Request, res : Response) => {
    let card = req.body; 
    card.userId = 1; //Number(req.userId);
    const user = await CardBO.update(card);


    res.json(user);
})

CardController.delete("/:id", async (req : Request, res : Response) => {
    let userId = 1; //Number(req.userId);
    let {id} = req.params; 
    const user = await CardBO.delete(Number(id));


    res.json(user);
})


export default CardController;
