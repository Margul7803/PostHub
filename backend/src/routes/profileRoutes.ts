import express, { Request, Response } from "express";
import UserModel from "../models/userModel";
import { authenticateToken } from "../middlewares/authMiddleware";
import jwt from "jsonwebtoken";
import { config } from "../init";

const app = express();

app.get("/me", authenticateToken, async (req: Request, res: Response) => {
    try {
        const email = req.user?.email;
        const user = await UserModel.findOne({ email });
        res.json(user);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

app.delete("/me", authenticateToken, async (req: Request, res: Response) => {
    try {
        const email = req.user?.email;

        const user = await UserModel.deleteOne({ email });
        res.json(user);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

app.patch("/me", authenticateToken, async (req: Request, res: Response) => {
    try {
        const email = req.user?.email;
        const updateData = req.body;

        await UserModel.updateOne({ email }, { $set: updateData });
        const token = jwt.sign(
            {
                email: updateData.email,
            },
            config.SECRET_KEY,
            { expiresIn: "12h" }
        );

        res.json({ new_token: token });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

export default app;
