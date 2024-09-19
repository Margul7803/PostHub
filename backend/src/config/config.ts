import dotenv from "dotenv";
dotenv.config();

interface Config {
    MONGODB_URI: string;
}

const getConfig = (): Config => {
    const env = process.env;

    if (!env.MONGODB_URI)
        throw new Error(
            "Les variables d'environnement ne sont pas correctement définies."
        );

    return {
        MONGODB_URI: env.MONGODB_URI,
    };
};

export default getConfig;
