import express, { urlencoded } from "express";

export default async (app)=>{
       app.use(express.json());
       app.use(urlencoded({extended:true}));
       return app;
}