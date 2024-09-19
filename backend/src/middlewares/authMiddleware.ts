import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import { config } from "../init";
import UserModel from "../models/userModel";

interface JwtPayload {
    email: string;
    username: string;
    role: string;
    id: string;
}

export const authenticateToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.status(401).send("Accès refusé. Token manquant.");

    jwt.verify(token, config.SECRET_KEY, (err: any, user: any) => {
        if (err) return res.status(403).send("Token invalide.");
        req.user = user as JwtPayload;
    });

    const isUserExists = await UserModel.findOne({ email: req.user?.email });

    if (!isUserExists) {
        return res.status(400).send("Token expiré.");
    }

    next();
};

export const authorizeRole = (role: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (req.user?.role !== role) {
            return res.status(403).send("Accès refusé.");
        }
        next();
    };
};
