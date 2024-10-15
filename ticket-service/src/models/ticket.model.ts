import { Schema, model } from 'mongoose';

const ticketSchema = new Schema({
    flight_id: {
        type: Schema.Types.ObjectId,
        ref: 'Flight', // Relación con la colección flights
        required: true
    },
    passenger_name: {
        type: String,
        required: true
    },
    passenger_email: {
        type: String,
        required: true
    },
    seat_number: {
        type: String,
        required: false // Campo opcional
    },
    ticket_price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Reserved', 'Cancelled', 'Paid', 'Completed'],
        default: 'Reserved'
    },
    payment_method: {
        type: String,
        required: true
    },
    booking_reference: {
        type: String,
        required: true,
        unique: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

const Ticket = model('Ticket', ticketSchema);
export default Ticket;
