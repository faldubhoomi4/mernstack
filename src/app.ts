import Express, { NextFunction, Request, Response } from "express";
import logger from "./config/logger";
import  { HttpError } from "http-errors";
import authRouther from "./routes/auth";

const app = Express();

// eslint-disable-next-line @typescript-eslint/no-unused-vars

app.get("/",  (req, res,) => {
  res.status(200).send("welcome to the server");
})

// Auth routes
 app.use("/auth", authRouther);
  

// global error handeler.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {

    logger.error(err.message);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                message: err.message,
                path: "",
                location: "",

            }
        ]


    })
})


export default app;
