const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

function decodeToken(token: string | undefined) : any{
    token = token?.replace("Bearer ", "");
    return jwt.verify(token, process.env.SECRET_KEY);
}

function generateToken(data: any){
    return jwt.sign(data, process.env.SECRET_KEY);
}

async function generatePasswordHash(password : string) : Promise<string>{
    return await bcrypt.hash(password, 10);
}

async function comparePasswordWithHash(password : string, hash : string){
    return await bcrypt.compare(password, hash);
}

export {decodeToken, generateToken, generatePasswordHash, comparePasswordWithHash};