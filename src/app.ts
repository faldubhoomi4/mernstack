import Express, { NextFunction, Request, Response } from "express";
import logger from "./config/logger";
import    { HttpError } from "http-errors";
 


const app = Express();
app.get ("/", async(req, res ) => {
    
 

    res.send ("welcome to the. server");
})

// global error handeler.

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {

    logger.error (err.message);
    const statusCode = err.statusCode   || 500;
    res.status(statusCode).json ({
        errors:[
            {
                type: err.name, 
                message: err.message,
                path: " ",
                location: " ",

            }
        ]


    })
})


export default app;
 