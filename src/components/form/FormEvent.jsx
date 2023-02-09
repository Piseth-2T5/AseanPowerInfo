import React from "react";

import './style.css'
const FormEvent = ({event, setEvent, handleSubmit, setEid})=>{

    const handleFile= (e) =>{
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => setEvent({...event, poster: reader.result})
    }
    const clear = (e) =>{
        e.preventDefault();
        setEvent({title: "", location: "", helddate: "", poster: "", description: "", createdAt: "", fbname: "", telname: "", fblink: "", tellink: "", number: ""});
        setEid(null);
    }
    return(
        <div className="container form-container">
            <h4 className="text-center pt-4">Event Form</h4>
            <form className="form-inline pt-4" onSubmit={handleSubmit}>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-6">
                        <input 
                            value={event.title}
                            onChange = {(e)=>setEvent({...event, title: e.target.value})}
                            type="text"  
                            className="form-control mb-3" 
                            placeholder="Event Heading"/>
                        <textarea 
                            value={event.description}
                            onChange = {(e)=> setEvent({...event, description: e.target.value})}
                            name="pdescription"  
                            className="w-100 form-control" 
                            rows={"5"} 
                            placeholder="Event Description">
                        </textarea>
                        <label htmlFor="" className="form-label mt-4">Event Poster</label>
                        <input 
                            onChange={handleFile}
                            type="file" 
                            className="form-control mb-4"/>
                        <div className="input-control">
                            <i className="fa-solid fa-phone icon"></i>
                            <input 
                                value={event.number}
                                onChange = {(e)=>setEvent({...event, number: e.target.value})}
                                type="text"  
                                className="form-control mb-4" 
                                placeholder="Phone Number"
                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="input-control">
                            <i className="fa-regular fa-calendar-days icon"></i>
                            <input 
                                value={event.helddate}
                                onChange = {(e)=>setEvent({...event, helddate: e.target.value})}
                                type="text"  
                                className="form-control mb-4" 
                                placeholder="dd-mm-yyyy"/>
                        </div>
                        <div className="input-control">
                            <i className="fa-brands fa-telegram icon"></i>
                            <input 
                                value={event.telname}
                                onChange = {(e)=>setEvent({...event, telname: e.target.value})}
                                type="text"  
                                className="form-control mb-4" 
                                placeholder="Telegram Name"/>
                        </div>
                        <div className="input-control">
                            <i className="fa-solid fa-link icon"></i>
                            <input 
                                value={event.tellink}
                                onChange = {(e)=>setEvent({...event, tellink: e.target.value})}
                                type="text"  
                                className="form-control mb-4" 
                                placeholder="Telegram Link"/>
                        </div>
                        <div className="input-control">
                            <i className="fa-brands fa-facebook icon"></i>
                            <input 
                                value={event.fbname}
                                onChange = {(e)=>setEvent({...event, fbname: e.target.value})}
                                type="text"  
                                className="form-control mb-4" 
                                placeholder="Facebook Name"/>
                        </div>
                        <div className="input-control">
                            <i className="fa-solid fa-link icon"></i>
                            <input 
                                value= {event.fblink}
                                onChange = {(e)=>setEvent({...event, fblink: e.target.value})}
                                type="text"  
                                className="form-control mb-4" 
                                placeholder="Facebook Link"/>
                        </div>
                        <div className="d-flex gap-4 ">
                            <button className="w-100 d-inline my-2 p-2 bg-light text-primary rounded border-1 border-primary"type="submit">Submit</button>
                            <button className="w-100 d-inline my-2 p-2 bg-light text-danger rounded border-1 border-danger"type="reset" onClick={clear}>Clear</button>
                         </div>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default FormEvent;