import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from 'body-parser';

import prouter from './routes/product.js';
import erouter from './routes/event.js';
import authrouter from './routes/auth.js';

const app = express();
const port = 5001;
app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '100mb'}));
app.use(cors());

app.use('/products', prouter);
app.use("/events", erouter);
app.use("/admins", authrouter);

app.get("/", (req, res)=>{
    res.send("APP IS RUNNING...")
})


mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://lg500ng:KoEbKiMrSg7UXiXi@asp-cluster.arspmut.mongodb.net/?retryWrites=true&w=majority`)
.then(()=> console.log("db connected..."))
.catch((err) => console.log(err));
app.listen(port, ()=>console.log("ok"));