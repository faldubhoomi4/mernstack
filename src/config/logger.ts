import { config } from "dotenv";
import winston from "winston";
import { Config } from ".";


const logger = winston.createLogger({
    level: "info",
    defaultMeta : { service: "auth-service" },
    transports: [
        new winston.transports.File({
            level: "info",
            filename: "app.log",
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
            dirname: ".logs",
            silent: false,
           
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
            // silent: Config.NODE_ENV === "test",
            silent: false,
        })
    ],                                                                                                                                                                                                      

});

export default logger;