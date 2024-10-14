import { Router } from "express";
import Ticket from "../models/ticket.model";

const router = Router();

//Obtener todos los tickets
router.get('/tickets', async (req, res) => {
    const tickets = await Ticket.find();
    res.json(tickets);
});

//Crear un nuevo ticket
router.post('/tickets', async (req, res) => {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.status(201).json(ticket);
});

export default router;