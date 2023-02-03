import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, deleteEvent } from '../actions/event';
import moment from 'moment';

import logo from "../assets/aplogo.jpg"
const Event = ({setEventId}) =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchEvents());
    }, [dispatch]);
    const events = useSelector(state => state.events);
    return(
        <div className="container">
            <div className="row mt-5  justify-content-center">
                {!events.length? (    
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div> ):

                <div className="container-fluid event-background">
                    <div className="container">
                        <div className="container-event">
                            <div className="container-event-2">
                                {events.map(event => 
                                <div className="event-box position-relative" key={event._id}>
                                    
                                    <img className="img-event" src={event.poster || logo} alt="poster"></img>
                                    <div className="event-body">
                                    
                                        <h3 className="event-heading">{event.title}<span className="span-event">{moment(event.createdAt).startOf("minute").fromNow()}</span></h3>
                                        <p className="event-para">{event.description}</p>
                                        <div className="event-footer">
                                            <p className="event-loca">{event.location}</p>
                                            <p className="event-date">{event.helddate}</p>
                                        </div>
                                    </div>
                                    <div className="edit-button position-absolute top-0 end-0" >
                                            <button className="btn btn-primary btn-collapse" type="button" data-bs-toggle="collapse" data-bs-target={`#edit-menu${event._id}`} aria-expanded="false" aria-controls={`#edit-menu${event._id}`}>
                                                <i className="fa-solid fa-gear"></i>
                                            </button>
                                            <div className="collapse menu-collapse" id={`edit-menu${event._id}`}>
                                                <div className="card ps-2 pt-4" >
                                                    <p className="text-start m-0 mt-2" onClick={()=>setEventId(()=> event._id)}>Edit</p>
                                                    <p className="text-start m-0 mt-2" onClick={()=>dispatch(deleteEvent(event._id))}>Delete</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
                }

            </div>
        </div>
    )
}
export default Event; 