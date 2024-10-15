import { Router } from "express";
import Flight from "../models/flight.model";

const router = Router();

//Obtener vuelos
router.get('/flights', async (req, res) => {
    try {
        const flghts = await Flight.find();
        res.json(flghts);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err });
    }
});

//Crear vuelo
router.post('/flights', async (req, res) => {
    try {
        const flight = new Flight(req.body);
        await flight.save();
        res.status(201).json(flight);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err });
    }
});

export default router;