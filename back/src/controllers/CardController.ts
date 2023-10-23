import { Request, Response, Router } from "express";
import { CardBO } from "../services/bo/CardBO";
import { AuthMiddleware } from "../middlewares/auth";

let CardController = Router();

CardController.use(AuthMiddleware)
CardController.get("/", async (req : Request, res : Response) => {
    let userId = Number(req.userId);
    const cards = await CardBO.getAllByUser(Number(userId));


    res.status(200).json(cards || []);
})

CardController.get("/:id", async (req : Request, res : Response) => {
    let userId = Number(req.userId);
    let {id} = req.params; 
    const card = await CardBO.getById(Number(id));


    res.status(200).json(card);
})

CardController.post("/", async (req : Request, res : Response) => {
    let card = req.body; 
    card.userId = Number(req.userId);
    const inserted = await CardBO.insert(card);


    res.status(201).json(inserted);
})

CardController.put("/:id", async (req : Request, res : Response) => {
    let card = req.body; 
    card.userId = Number(req.userId);
    card.id = Number(req.params.id);
    const updated = await CardBO.update(card);


    res.status(200).json(updated);
})

CardController.delete("/:id", async (req : Request, res : Response) => {
    let userId = Number(req.userId);
    let {id} = req.params; 
    const deleted = await CardBO.delete(Number(id));
    const cards = await CardBO.getAllByUser(Number(userId));


    res.status(200).json(cards);
})


export default CardController;
