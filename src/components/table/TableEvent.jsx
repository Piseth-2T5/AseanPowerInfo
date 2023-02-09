import React from "react";
import { deleteEvent } from "../../actions/event";
import { useDispatch } from "react-redux";
const TableEvent = ({setSwicher, setHide, events, setEid, setEvent}) =>{
    const dispatch = useDispatch();
    const handleUpdate = (id) =>{
        const event = events.find(e => e._id === id);
        setEvent(event)
        setSwicher(false);
        setHide(false);
        setEid(id)
    }
    let i = 0;
    return(
        <div className="table-wraper pt-4">
            <table className="table">
                <thead className="bg-dark bg-opacity-10">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th>EDIT</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event=>
                    <tr key={event._id}>
                        <th scope="row">{i+=1}</th>
                        <td>{event.title}</td>
                        <td>{event.helddate}</td>
                        <td>{event.description}</td>
                        <td >
                            <i className="fa-regular fa-pen-to-square me-2 " onClick={()=> { handleUpdate(event._id)}}></i>
                            <i className="fa-solid fa-trash-can m-2 text-danger" onClick={()=> dispatch(deleteEvent(event._id))}></i>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default TableEvent;