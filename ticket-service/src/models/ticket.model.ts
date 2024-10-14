import { Schema, model } from 'mongoose';

const ticketSchema = new Schema({
    origin: String,
    destination: String,
    airline: String,
    flight_num: Number,
    origin_iata_code: String,
    origin_name: String,
    origin_latitude: Number,
    origin_longitude: Number,
    destination_iata_code: String,
    destination_name: String,
    destination_latitude: Number,
    destination_longitude: Number
});

const Ticket = model('tickets', ticketSchema);
export default Ticket;
