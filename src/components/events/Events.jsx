import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import "./style.css";
import { fetchEvents } from "../../actions/event";

const Events = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchEvents())
    }, [dispatch])
    const events = useSelector(state=> state.events)
    const openEvent = (id) =>{
        navigate(`/events/${id}`)
    }
    return (
        <div className="container pt-5">
            <div className="row g-4">
            {!events[0] ?
                <span className="text-center">សូមរងចាំ...</span>
                    :
            events.map(event=>
                <div className="col-12 col-lg-6" key={event._id}>
                    <div className="event shadow rounded-3 d-flex p-2 p-md-4" onClick={()=>openEvent(event._id)}>
                        <div className="img-wrap">
                            <img src={event.poster} alt="" className="img-event" />
                        </div>
                        <div className="event-content">
                            <h4 className="heading">{event.title}</h4>
                            <p className="para">{event.description}</p>
                            <div className="footer d-flex py-2 text-center">
                                <span className="location bg-light w-50 shadow-sm"><i className="fa-solid fa-location-dot"></i></span>
                                <span className="helddate bg-light w-50 shadow-sm"><i className="fa-regular fa-calendar-days"></i></span>
                            </div>
                        </div>
                    </div>
                </div> )}
            </div>
        </div>
    )
}


export default Events;