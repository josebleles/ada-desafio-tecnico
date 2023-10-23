import { Request, Response, NextFunction} from "express"; 
import { decodeToken } from "../utils/auth";
import { User } from "@prisma/client";

export function AuthMiddleware(req: Request, res :Response, next : NextFunction){
  try{
    const token = req.headers.authorization;
    if(token){
      const decoded = decodeToken(token) as User;
      req.userAuth = decoded;
      req.userId = decoded.id;
    }      
  }catch(err){
    req.userAuth = undefined;
  }

  if(!req.userAuth){
    return res.sendStatus(401);
  }

  next();
}  
