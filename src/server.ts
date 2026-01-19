interface IConfig {  
    port: number;
}

const Config: IConfig = {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
};

export { Config };
