import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/databaseConnection.js';
import Product from './models/product.model.js';
dotenv.config();
const app=express();
app.use(express.json())
app.listen(5000,()=>{
    connectDB();
    console.log('Server started at http://localhost:5000 Heo')
})
app.post('/api/Addproduct',async (req,res)=>{
    const product=req.body   // user will sent his data
    if(!product.name || !product.price || !product.image){
       return res.status(400).json({success:false,message:"please provide all the feildes of product"})
    }
    const newProduct=new Product(product)
    try{
        await newProduct.save();
        res.status(201).json({success:true,data:newProduct, message:"Product addes successfully"})

    }catch(error){
       console.log("Errpr in adding the Product",error.message);

    }
    res.send({massage:"server in listening"});
})
