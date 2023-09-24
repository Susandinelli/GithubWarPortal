import express from 'express';
import { PrismaClient } from '@prisma/client';

const signUpNewsletterRouter = express.Router();
const prisma = new PrismaClient();

signUpNewsletterRouter.post("/", async( req,res)=> {


    const email = req.body.email;
    console.log(email);
    const alreadyAdded = await prisma.newsletter.findFirst({
        where: {
            email:email
        }
    })
    if(!alreadyAdded){
 const addedData = await prisma.newsletter.create({ data: {
       email: email
    } }); console.log(addedData);
    } else {
        res.send("Already Added");
    }
   
   
})

export default signUpNewsletterRouter;