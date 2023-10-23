import axios, { AxiosResponse } from 'axios';
import { database } from '../dao/database';
import { CardDAO } from '../dao/CardDAO';
import { id } from 'date-fns/locale';

export const CardBO = {

    async getAllByUser(id: number){
        return CardDAO.getAllByUser(id)
    },

    async getById(id: number){
        return CardDAO.getById(id)

    },

    async insert(card : any){
        return CardDAO.insert(card)

    },

    async update(card : any){
        return CardDAO.update(card)

    },


    async delete(id : number){
        return CardDAO.delete(id)

    },

    

}