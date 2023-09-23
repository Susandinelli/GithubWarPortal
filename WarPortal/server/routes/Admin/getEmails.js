import express from 'express';
import {PrismaClient} from '@prisma/client'

const getEmailListRouter = express.Router();

const prisma = new PrismaClient();


getEmailListRouter.get("/", async ( req, res) => {
    const emailList = await prisma.newsletter.findMany();
    console.log(emailList)
    res.send(emailList);
})

export default getEmailListRouter;