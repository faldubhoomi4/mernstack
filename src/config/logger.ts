import winston from "winston";
import { Config } from "./index";

const logger = winston.createLogger({
    level: "info",
    defaultMeta : { service: "auth-service" },
    transports: [
        new winston.transports.File({
            level: "info",
            filename: "app.log",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
            dirname: ".logs",
             silent: Config.NODE_ENV === "TEST",
           
        }),
         new winston.transports.File({
            level: "error",
            filename: "error.log",
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
            dirname: ".logs",
            silent: false,
           
        }),
        new winston.transports.Console({ 
            level: "info",
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
            silent: Config.NODE_ENV === "TEST",
        })
    ],                                                                                                                                                                                                      

});

export default logger;