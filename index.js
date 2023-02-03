import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import prouter from './routes/product.js';
import erouter from './routes/event.js';
import authrouter from './routes/auth.js';
const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '100mb'}));
app.use(cors());
dotenv.config();

app.use('/products', prouter);
app.use("/events", erouter);
app.use("/admins", authrouter);

app.get("/", (req, res)=>{
    res.send("APP IS RUNNING...")
})
app.get('/*', (req, res)=>{
    res.send('index.html')
})

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@asp-cluster.arspmut.mongodb.net/?retryWrites=true&w=majority`)
.then(()=> console.log("db connected..."))
.catch((err) => console.log(err));
app.listen(PORT, ()=>console.log("ok"));