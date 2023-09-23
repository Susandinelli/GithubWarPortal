import express from 'express';
import { PrismaClient } from '@prisma/client';

const getStoreOwnerRouter = express.Router();
const prisma = new PrismaClient();

 getStoreOwnerRouter.get("/", async (req, res)=> {
    const storeOwners = await prisma.storeOwner.findMany();
    console.log(storeOwners)
    res.send(storeOwners);
})

export default getStoreOwnerRouter;