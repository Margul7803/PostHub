import express, { Request, Response } from "express";
import UserModel from "../models/userModel";

const app = express();

app.get("/", async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

app.get("/:id", async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.json(user);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

app.post("/", async (req: Request, res: Response) => {
    try {
        const user = new UserModel(req.body);
        await user.save();
        res.json(user);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

app.delete("/:id", async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ error: "User not found" });
        res.json({ message: "User deleted" });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

export default app;
