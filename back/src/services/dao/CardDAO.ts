import { User } from "@prisma/client";
import { database } from "./database";
export const CardDAO = {

    async getAllByUser(id: number){
        return await database.card.findMany({where: {
            userId: id
        }})
    },

    async getById(id: number){
        return await database.card.findUnique({where: {
            id
        }})
    },

    async insert(card : any){
        return await database.card.create({data: card})
    },

    async update(card : any){
        return await database.card.update({where:{id: card.id},data: {...card, id: undefined}})
    },


    async delete(id : number){
        return await database.card.delete({where:{id}})

    },
    
}