import mongoose from 'mongoose';

import { Schema } from 'mongoose';


const eventSchema = new Schema({
    title: String,
    location: String,
    helddate: {
        type: String,
    },
    description: String,
    poster: String,
    number: String,
    fbname: String,
    fblink: String,
    telname: String,
    tellink: String,
    ceatedAt: {
        type: Date,
        default: new Date()
    }

})


const Event = mongoose.model("Event", eventSchema);


export default Event;