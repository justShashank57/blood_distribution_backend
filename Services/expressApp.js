import express, { urlencoded } from "express";
import { userRoutes } from "../Routes/userRoute.js";

export default async (app)=>{
       app.use(express.json());
       app.use(urlencoded({extended:true}));
       app.use('user',userRoutes);
       return app;
}