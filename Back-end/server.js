import express from 'express'
import env from 'dotenv'
import cors from 'cors'
import connection from './connection.js';
import router from './router.js';

const app=express();
env.config();

app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use('/api',router);

connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`http://localhost:${process.env.PORT}`);
        
    })
}).catch((error)=>{
    console.log("Error in server integration");
    
})