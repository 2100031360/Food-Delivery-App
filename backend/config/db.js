import mongoose from "mongoose";


export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://sumaiya:6301011477@cluster0.sf85qis.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}