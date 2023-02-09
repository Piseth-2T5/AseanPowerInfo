import React, {useEffect} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './style.css';
import { fetchEvents } from "../../actions/event";

const EventDetail = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchEvents())
    }, [dispatch])
    const {id} = useParams();
    const event = useSelector(state=> state.events.find(e => e._id === id))
    const navigate = useNavigate();
    return(
        <div className="container pt-5">
            <div className="row justify-content-center ">
                {!event ?<div className="spinner-border text-secondary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>:
                <div className="col-12 col-lg-8 bg-light shadow py-4 position-relative">
                    <button className="cross-button-event position-absolute end-0 top-0" onClick={()=>navigate('/events')}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <h4 className="heading-detail mb-4 mt-2">{event.title}</h4>
                    <img src={event.poster} alt="" className="img-event w-100 overflow-hidden" />
                    <p className="para-detail">{event.description}</p>
                    <div className="footer d-flex py-2 text-start flex-wrap">
                        <span className="location bg-light w-100 shadow-sm p-2"><i className="fa-solid fa-location-dot me-2"></i>{event.location}</span>
                        <span className="helddate bg-light w-100 shadow-sm p-2"><i className="fa-regular fa-calendar-days me-2"></i>{event.helddate}</span>
                        {event.fblink && <span className="helddate bg-light w-100 shadow-sm p-2 "><Link to={event.fblink}><i className="fa-brands fa-facebook me-2"></i>{event.fbname}</Link></span>}
                        {event.tellink && <span className="helddate bg-light w-100 shadow-sm p-2 "><Link to={event.tellink}><i className="fa-brands fa-telegram me-2"></i>{event.telname}</Link></span>}
                    </div>
                </div>}
            </div>
        </div>
    )
}


export default EventDetail;