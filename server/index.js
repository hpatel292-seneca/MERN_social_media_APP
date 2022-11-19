import bodyParser from "body-parser";
import  Express  from "express";
import cors from 'cors';
import mongoose from "mongoose";
const app = Express();
import postRoutes from './routes/post.js';

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


app.use("/posts", postRoutes);
let url = "mongodb+srv://mernApp:mernApp123@cluster0.uprhtzl.mongodb.net/?retryWrites=true&w=majority";
const port = process.env.port || 5000;
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{ app.listen(port , ()=>console.log("Server is running")) })
    .catch((err)=>{console.log(err.message)});

// mongoose.set("useFindAndModify", false);    
