import mongoose from 'mongoose';
import Event from "../models/event.js";


export const getEvent = async (req, res)=>{
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        console.log(error);
    }
}

export const addEvent = async (req, res) =>{
    const event = req.body;
    const newEvent = new Event(event);
    try {
        await newEvent.save();
        res.status(200).json(newEvent)
    } catch (error) {
        console.log(error);
    }
}

export const updateEvent = async (req,res) =>{
    const {id}= req.params;
    const event = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no Event have been found')

    try {
        const updatedEvent = await Event.findByIdAndUpdate(id, event, {new: true});
        res.json(updatedEvent)
    } catch (error) {
        console.log(error);
    }
}
export const deleteEvent = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no Event have been found');
    try {
        const events = await Event.findByIdAndDelete(id);
        res.json(events);
    } catch (error) {
        console.log(error);
    }
}