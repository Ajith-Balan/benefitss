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

const startServer = async () => {
    try {
        await connection();  // Ensure the database connects first
        app.listen(process.env.PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error in server integration:", error);
    }
};

startServer();
