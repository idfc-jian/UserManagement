import { Router } from "express";
import UserPostgres from "../models/userPostgres";
import UserMongo from "../models/userMongo";

const router = Router();

router.get("/users", async (req, res) => {
    try {
        const userPostgres = await UserPostgres.findAll()
        const userMongo = await UserMongo.find()
        res.json({ postgres: userPostgres, mongo: userMongo })
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.post("/users", async (req, res) => {
    const { firstname, lastname, email } = req.body;
    try {
        const newUserPostgres = await UserPostgres.create({
            firstname,
            lastname,
            email
        })

        const newUserMongo = await UserMongo.create({
            firstname,
            lastname,
            email
        })

        res.status(201).json({
            message: "Usuario creado exitosamente en ambas bases de datos",
            postgres: newUserPostgres,
            mongo: newUserMongo
        });

    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
})

export default router;