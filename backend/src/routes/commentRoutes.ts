import { Request, Response, Router } from "express";
import CommentModel from "../models/commentModel";
import express from "express";
import { authenticateToken } from "../middlewares/authMiddleware";
import UserModel from "../models/userModel";

const app = express();

app.get("/", authenticateToken, async (req: Request, res: Response) => {
    try {
        const comments = await CommentModel.find();
        res.json(comments);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

app.get("/:id", authenticateToken, async (req: Request, res: Response) => {
    try {
        const comment = await CommentModel.findById(req.params.id);
        res.json(comment);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

app.post("/", authenticateToken, async (req: Request, res: Response) => {
    const data = req.body;
    const comment = new CommentModel({
        ...data,
        author: req.user?.id,
    });

    try {
        const dataToSave = await comment.save();
        res.status(201).json({ message: dataToSave });
    } catch (e: any) {
        res.status(400).json({ message: e.message });
    }
});

app.delete("/:id", authenticateToken, async (req: Request, res: Response) => {
    try {
        const comment = await CommentModel.findByIdAndDelete({
            author: req.user?.id,
            _id: req.params.id,
        });
        if (!comment)
            return res.status(404).json({ error: "Comment not found" });
        res.json({ message: "Comment deleted" });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

export default app;
