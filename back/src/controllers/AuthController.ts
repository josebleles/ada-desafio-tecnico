import { Request, Response, Router } from "express";

import { AuthBO } from "../services/bo/AuthBO";

let AuthController = Router()

AuthController.post("/", async (req : Request, res : Response) => {
    const { login, senha } = req.body;

    const user = await AuthBO.login(login, senha);
    if(!user){
        return res.sendStatus(401);
    }
    const token = await AuthBO.generateToken(user);
    if(!token)
        return res.sendStatus(401);

    // res.json({token, user});
    res.status(200).json(token);
})

export default AuthController;