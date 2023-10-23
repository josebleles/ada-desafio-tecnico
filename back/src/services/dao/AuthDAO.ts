import { User } from "@prisma/client";
import { database } from "./database";
export const AuthDAO = {

    async getUserByLogin(login: string) : Promise<User | null> {
        return await database.user.findFirst({
            where: {
                login
            }
        });
    }
    
}