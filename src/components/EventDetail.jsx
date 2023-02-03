import React, { useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import logo from "../assets/aplogo.jpg"
import { fetchEvents } from "../actions/event";
const EventDetail = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(()=>{
        dispatch(fetchEvents());
    }, [dispatch])

    const event  = useSelector(state=>state.events.find(ev => ev._id === id))
    const goBack = ()=>{
        navigate('/events')
    }
    const openUrl = ({fb, tel}) =>{
        if(fb && event.fblink) window.open(event.fblink, "_blank")
        if(tel && event.tellink) window.open(event.tellink, "_blink")
    }
    return(
        <>
        {!event 
        ?
        (<div className="d-flex justify-content-center text-white">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>  
        )
        :
        (<div className="container-fluid event-detail-bg position-relative top-50">
            <div className="">
                <div className="container">
                    <div className="event-detail-container position-relative">
                        <button className='go-back' onClick={goBack}>Back</button>
                        <div className="container event-detail">
                            <div className=" event-detail-2">
                                <h3 className="event-det-heading">{event.title}<span className="span-event-det">{moment(event.createdAt).startOf('minutes').fromNow()}</span></h3>
                                <div className="img-event-detail-container">
                                    <img src={logo} alt="" className="img-event-detail" />
                                </div>
                                <div className="event-detail-content">
                                    <p className="event-det-para">{event.description}</p>
                                    <div className="event-det-footer">
                                        {event.location && <p className="event-det-loca"><i className="fa-solid fa-location-dot me-2"></i>{event.location}</p>}
                                        {event.helddate && <p className="event-det-date"><i className="fa-regular fa-calendar-days me-2"></i>{event.helddate}</p>}
                                        <div className="contact-event">
                                            {event.number && <p className="event-det-phonenumber"><i className="fa-solid fa-phone me-2" ></i>{event.number}</p>}
                                            {event.fblink && <p className="event-det-facebook " onClick={()=>openUrl({fb: true})}><i className="fa-brands fa-facebook me-2"></i>{event.fbname}</p>}
                                            {event.tellink && <p className="event-det-telegram" onClick={()=>openUrl({tel: true})}><i className="fa-brands fa-telegram me-2"></i>{event.telname}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>            
                        </div>
                    </div>
                </div>
            </div>
        </div>)}
        </>

    )
}

export default EventDetail;