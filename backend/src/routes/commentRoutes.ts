import { Request, Response, Router } from "express";
import CommentModel from "../models/commentModel";
import express from "express";

const app = express();

app.get("/", async (req: Request, res: Response) => {
    try {
        const comments = await CommentModel.find();
        res.json(comments);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

app.get("/:id", async (req: Request, res: Response) => {
    try {
        const comment = await CommentModel.findById(req.params.id);
        res.json(comment);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

app.post("/", async (req: Request, res: Response) => {
    const comment = new CommentModel(req.body);

    try {
        const dataToSave = await comment.save();
        res.status(201).json({ message: dataToSave });
    } catch (e: any) {
        res.status(400).json({ message: e.message });
    }
});

app.delete("/:id", async (req: Request, res: Response) => {
    try {
        const comment = await CommentModel.findByIdAndDelete(req.params.id);
        if (!comment)
            return res.status(404).json({ error: "Comment not found" });
        res.json({ message: "Comment deleted" });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

export default app;
