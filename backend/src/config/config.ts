import dotenv from "dotenv";
dotenv.config();

interface Config {
    MONGODB_URI: string;
    SECRET_KEY: string;
}

const getConfig = (): Config => {
    const env = process.env;

    if (!env.MONGODB_URI || !env.SECRET_KEY)
        throw new Error(
            "Les variables d'environnement ne sont pas correctement définies."
        );

    return {
        MONGODB_URI: env.MONGODB_URI,
        SECRET_KEY: env.SECRET_KEY,
    };
};

export default getConfig;
