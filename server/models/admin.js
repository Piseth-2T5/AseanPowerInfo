import mongoose from 'mongoose';
import { Schema } from 'mongoose';


const adminShema = new Schema({
    email: String,
    password: String,
    id: String
})


const Admin = mongoose.model("Admin", adminShema);
export default Admin;

