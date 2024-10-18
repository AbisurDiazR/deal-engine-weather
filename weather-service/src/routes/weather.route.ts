import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Endpoint para consultar el clima basado en latitud y longitud
router.post('/weather-report', async (req: any, res: any) => {
    try {
        const { destination_latitude, destination_longitude } = req.body;

        const options = {
            method: 'GET',
            url: `https://open-weather13.p.rapidapi.com/city/latlon/${destination_latitude}/${destination_longitude}`,
            headers: {
                'x-rapidapi-key': process.env.RAPIDAPI_KEY, // Usar la clave de tu archivo .env
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
            }
        };

        // Realiza la solicitud a la API
        const response = await axios.request(options);

        // Envía la respuesta del clima al cliente
        return res.json(response.data);
    } catch (error: any) {
        // Maneja cualquier error y devuelve un mensaje adecuado
        switch (error.status) {
            case 429:
                return res.status(429).json({
                    message: "Limite de peticiones excedida",
                    error: "You have exceeded the MONTHLY quota for Requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/worldapi/api/open-weather13"
                });
            case 400:
                return res.status(429).json({
                    message: "Coordenadas invalidas",
                    error: "Nothing to geocode"
                });
            default:
                return res.status(500).json({
                    message: "Error interno del servidor",
                    error: "Error del servidor"
                });
        }
    }
});

export default router;