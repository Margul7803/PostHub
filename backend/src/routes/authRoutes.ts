import express, { NextFunction, Request, Response } from "express";
import UserModel from "../models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { config } from "../init";

const app = express();

app.post(
    "/register",
    async (req: Request, res: Response, next: NextFunction) => {
        const { username, password, email, avatarUrl } = req.body;

        const isUserExists = await UserModel.findOne({ email });
        if (isUserExists) {
            return res.status(400).send("Utilisateur déjà enregistré.");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            username,
            password: hashedPassword,
            email,
            avatarUrl,
            joinedAt: new Date(),
        });

        try {
            await newUser.save();
            res.status(201).send("Utilisateur enregistré avec succès.");
            next();
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }
);

app.post("/login", async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.status(400).send("Utilisateur ou mot de passe incorrect.");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).send("Utilisateur ou mot de passe incorrect.");
    }

    const token = jwt.sign(
        {
            username: user.username,
            role: user.role,
            email: user.email,
            id: user._id,
        },
        config.SECRET_KEY,
        { expiresIn: "12h" }
    );

    res.json({ token });
    next();
});

export default app;
