import { AuthDAO } from '../dao';
import * as utilsAuth from '../../utils/auth';
import { User } from '../../models/User';

export const AuthBO = {

    async login(login: string, password : string){
        const user = await AuthDAO.getUserByLogin(login);
        if(!user || !(await utilsAuth.comparePasswordWithHash(password, user.password)))
            return null;

        return {
            id : user.id,
        };
    },

    async generateToken(user : any){
        return await utilsAuth.generateToken({
            id: user.id,
            login: user.email,
        } as User);
    }

}