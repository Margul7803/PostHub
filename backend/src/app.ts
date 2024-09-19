import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import getConfig from "./config/config";

const config = getConfig();

const mongoString = config.MONGODB_URI;

mongoose.connect(mongoString!);
const database = mongoose.connection;

database.useDb("postHub");

database.on("error", (error) => {
    console.log(error);
});

database.once("connected", () => {
    console.log("Database Connected");
});

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
