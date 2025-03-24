import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const url = "mongodb+srv://chriss212:<db_password>@cluster0.is7jo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        const connection = await mongoose.connect(url)
    } catch (error: any) {
        console.log(error.message)
    }
}
