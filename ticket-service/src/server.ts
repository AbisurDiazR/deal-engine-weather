import express, { Application } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes/ticket.route';

//Cargar variables de entorno
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 4000;

//Midleware
app.use(express.json());

//Rutas
app.use('/api', routes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI as string).then(() => {
    console.log('Ticket Service: MongoDB connected');
    app.listen(port, () => {
        console.log(`Ticket Service running on port ${port}`);
    });
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});