import express from 'express';
import { PrismaClient } from '@prisma/client';

const getCreatorAdminRouter = express.Router();

const prisma = new PrismaClient();

getCreatorAdminRouter.get("/", async (req, res) => {
    const creators =  await prisma.creator.findMany();
    console.log(creators)
    res.send(creators);
})

export default getCreatorAdminRouter;