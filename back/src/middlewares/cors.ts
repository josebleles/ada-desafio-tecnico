import cors from "cors";

export const corsMiddleware = (
    process.env.NODE_ENV == 'production'? 
    cors({
        origin: '*',
    })
    :
    cors({
        origin: '*',
    })
);