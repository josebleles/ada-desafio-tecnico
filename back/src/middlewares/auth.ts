import { Request, Response, NextFunction} from "express"; 
import { DefaultError, HttpCode } from "../models/api/DefaultError";
import { decodeToken } from "../utils/auth";
import User from "../models/UserToken";

export function parseAuthTokenMiddleware(req: Request, res :Response, next : NextFunction){
    try{
      const token = req.headers.authorization;
      if(token){
        const decoded = decodeToken(token) as User;
        req.authUser = decoded;
      }      
    }catch(err){
      req.authUser = undefined;
    }

    next();
}  

export function validateAuthorizationMiddleware(authRoles : string[] | undefined ){
  return function(req: Request, res :Response, next : NextFunction){
    const user = req.authUser;
    
    if(!user){
      throw new DefaultError({
        status: HttpCode.UNAUTHORIZED,
        friendlyMessage: "User required",
        message: "Please make sure that you are logged in.",
      });
    }

    if (!authRoles || authRoles.length === 0){
      next();
      return;
    }

    let permissionMatched;
    for(let role of authRoles){
      if(user.permissions.split(",").includes(role)){
        permissionMatched = role;
        break;
      }
    }
    
    if(!permissionMatched){
      throw new DefaultError({
        status: HttpCode.UNAUTHORIZED,
        friendlyMessage: "Permission denied",
        message: "You do not have permission to access this resource.",
      });
    }
    
    req.authAdmin = permissionMatched.includes(":admin");
    
    req.userId = req.authUser?.id;
    if(req.authAdmin && req.query.userId){
      req.userId = Number(req.query.userId);
    }
    if(req.authAdmin && req.body.userId){
      req.userId = Number(req.body.userId);
    }
    
    next();
    
  }
}  