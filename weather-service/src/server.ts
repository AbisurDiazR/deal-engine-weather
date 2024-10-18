import express from "express";
import dotenv from "dotenv";
import weatherRoute from "./routes/weather.route";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));

app.use('/api', weatherRoute);

app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en el puerto: ${PORT}`)
});