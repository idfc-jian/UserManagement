import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    createdat: { type: Date, default: Date.now },
});

const UserMongo = mongoose.model("User", userSchema);

export default UserMongo;