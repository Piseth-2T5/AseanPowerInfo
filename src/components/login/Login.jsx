import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {signin} from "../../actions/auth"


const Login = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [admin, setAdmin] = useState({email: "", password: ""});
    const [isCheck, setIsCheck] = useState(false)
    const errorMessage = useSelector(state => typeof state.auth === "string" ?state.auth : null)
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(signin(admin, navigate))
    }
    return(
        <div className="container mt-5 pt-5">
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6 rounded shadow p-3">
                        {errorMessage&& <div className="alert alert-danger">{errorMessage}</div>}
                        <h4 className="pt-4 text-center">Admin</h4>
                        <input 
                            value={admin.email}
                            onChange={e => setAdmin({...admin, email: e.target.value})}
                            type="text" 
                            className="form-control my-4" 
                            placeholder="Email"/>
                        <input 
                            type={isCheck? "text" : "password"} 
                            className="form-control my-4" 
                            placeholder="Password"
                            value={admin.password}
                            onChange={(e)=>setAdmin({...admin, password: e.target.value})}
                        />
                        <div className="d-flex align-items-center mt-3">
                            <input type="checkbox" onClick={()=>{setIsCheck(!isCheck)}} className="me-2 checkbox"/>
                            <label className="form-check-label">Show password</label>
                        </div>
                        <button className="btn btn-primary px-4 mt-3" type ="submit">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default Login;