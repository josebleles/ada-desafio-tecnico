import { User } from "./User";


declare global {
    namespace Express {
        interface Request {
        userAuth?: User;
        userId?: number;
        }
    }
}