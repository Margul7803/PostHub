import { Request, Response, Router } from "express";
import express from "express";
import PostModel from "../models/postModel";

const app = express();

app.get("/", async (req: Request, res: Response) => {
    const posts = await PostModel.find();
    res.status(200).json(posts);
});

app.get("/:id", async (req: Request, res: Response) => {
    const post = await PostModel.findById(req.params.id);
    res.status(200).json(post);
});

app.post("/", async (req: Request, res: Response) => {
    const post = new PostModel(req.body);

    try {
        const dataToSave = await post.save();
        res.status(201).json({ message: dataToSave });
    } catch (e: any) {
        res.status(400).json({ message: e.message });
    }
});

app.delete("/:id", async (req: Request, res: Response) => {
    try {
        const post = await PostModel.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).json({ error: "User not found" });
        res.status(200).json({ message: "Post deleted" });
    } catch (e: any) {
        res.status(400).json({ message: e.message });
    }
});

export default app;
