import express from 'express';
import { PrismaClient } from '@prisma/client';

const signUpNewsletterRouter = express.Router();
const prisma = new PrismaClient();

signUpNewsletterRouter.post("/", async( req,res)=> {


    const email = req.body.email;
    const alreadyAdded = prisma.newsletter.findFirst({
        where: {
            email:email
        }
    })
    if(!alreadyAdded){
 const addedData = await prisma.newsletter.create({ data: {
       email: email
    } }); console.log(addedData);
    } else {
        console.log("already added");
    }
   
   
})

export default signUpNewsletterRouter;