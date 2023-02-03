import React ,{ useEffect }from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../actions/event";
import logo from "../assets/aplogo.jpg"
import moment from "moment";

const News = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(fetchEvents())
    }, [dispatch])
    const events = useSelector(state => state.events)
    const handleEventDetail = (id)=>{
        navigate(`/events/${id}`)
    }
    return(
        <div className="container-fluid event-background">
            <div className="container">
                <div className="container-event">
                    <div className="container-event-2">
                        {!events ? (<p>This page is empty because there is no event has been add yet.</p>) :
                        events.map(event => 
                        <div className="event-box" key={event._id} onClick={()=>handleEventDetail(event._id)}>
                            <img className="img-event" src={event.poster || logo} alt=""></img>
                            <div className="event-body">
                                <h3 className="event-heading">{event.title}<span className="span-event">{moment(event.createdAt).startOf('minutes').fromNow()}</span></h3>
                                <p className="event-para">{event.description}</p>
                                <div className="event-footer">
                                    <p className="event-loca">{event.location}</p>
                                    <p className="event-date">{event.helddate}</p>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;