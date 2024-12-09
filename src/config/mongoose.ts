import mongoose from "mongoose";

const connectMongo = async () => {
    try{
        await mongoose.connect("mongodb+srv://admin:Ingeniero-2024@cluster0.me9db.mongodb.net/user_management"); 
        console.log("MongoDB conectado correctamente");
    }catch(error){
        console.error("Error conectando a MongoDB", error);
    }
}

export default connectMongo;