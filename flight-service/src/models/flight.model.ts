import { Schema, model } from 'mongoose';

const flightSchema = new Schema({
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

const Flight = model('Flight', flightSchema);
export default Flight;
