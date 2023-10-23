import { Request, Response, Router } from "express";
import { database } from "../services/dao/database";
import { AuthBO } from "../services/bo/AuthBO";
import { CardBO } from "../services/bo/CardBO";
import { generatePasswordHash } from "../utils/auth";

let CardController = Router();
CardController.get("/", async (req : Request, res : Response) => {
    let userId = 1; //Number(req.userId);
    const user = await CardBO.getAllByUser(Number(userId));


    res.json(user);
})

CardController.get("/:id", async (req : Request, res : Response) => {
    let userId = 1; //Number(req.userId);
    let {id} = req.params; 
    const user = await CardBO.getAllById(Number(id));


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
