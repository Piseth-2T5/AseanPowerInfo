import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { signin, signup } from "../actions/auth";
import {useNavigate} from 'react-router-dom';



const Login = () =>{
    const user = JSON.parse(localStorage.getItem("profile"));
    const [isSignin, setIsSignin] = useState(true)
    const [isCheck, setIsCheck] = useState(false)
    const [admin, setAdmin] = useState({email: "", password: "", compassword:''});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const errorMessage = useSelector(state => typeof state.auth === "string" ?state.auth : null)
    const handleSubmit = (e) =>{
        e.preventDefault();
        try {
            if (isSignin){
                dispatch(signin(admin, navigate))
        
            }else{
                dispatch(signup(admin, navigate))
            }
        } catch (error) {
            
        }
    }
    return (
        <div className="container-fluid text-center bg-white container-login">
            <h1 className="text-center  pt-5">Admin</h1>
            <p className="text-center ">Authentication:</p>
            {user && <button className={`btn  ${isSignin? 'btn-light' : 'btn-primary'}`}  onClick={()=> setIsSignin(false)}>Sign Up</button>}
            <button className={`btn  ${!isSignin? 'btn-light' : 'btn-primary'}`} onClick={()=> setIsSignin(true)}>Sign In</button>
            {!isSignin && user && (<div className="sign-up text-start">
                <form className="form mx-auto shadow rounded p-4" onSubmit={handleSubmit}>
                    <label className="form-label" >Email: </label>
                    <input 
                        autoFocus
                        type="email" 
                        className="form-control" 
                        value={admin.email}
                        onChange={(e)=>(setAdmin({...admin, email: e.target.value}))}
                        />
                    <label className="form-label" >Password: </label>
                    <input 
                        name="password"
                        type={isCheck? "text" : "password"} 
                        className="form-control" 
                        value={admin.password}
                        onChange={(e)=>setAdmin({...admin, password: e.target.value})}
                    />
                    <label className="form-label" >Comfirm password: </label>
                    <input 
                        name="comfirm-password"
                        type={isCheck? "text" : "password"} 
                        className="form-control" 
                        value={admin.compassword}
                        onChange={(e)=>setAdmin({...admin, compassword: e.target.value})}
                    />
                    <div className="d-flex align-items-center mt-3">
                        <input type="checkbox" onClick={()=>{setIsCheck(!isCheck)}} className="me-2 checkbox"/>
                        <label className="form-check-label " >Show password</label>
                    </div>
                    <button className="btn btn-success mt-4 w-100 text-white fs-5">Sign up</button>
                </form>
            </div>)}
            {isSignin && (<div className="sign-in text-start">
                
                <form className="form mx-auto shadow rounded p-4" onSubmit={handleSubmit}>
                    {errorMessage&& <div className="alert alert-danger">{errorMessage}</div>}

                    <label className="form-label" >Email: </label>
                    <input 
                        autoFocus
                        type="email" 
                        className="form-control" 
                        value={admin.email}
                        onChange={(e)=>(setAdmin({...admin, email: e.target.value}))}
                        />
                    <label className="form-label" >Password: </label>
                    <input 
                        type={isCheck? "text" : "password"} 
                        className="form-control" 
                        value={admin.password}
                        onChange={(e)=>setAdmin({...admin, password: e.target.value})}
                        />
                    <div className="d-flex align-items-center mt-3">
                        <input type="checkbox" onClick={()=>{setIsCheck(!isCheck)}} className="me-2 checkbox"/>
                        <label className="form-check-label " >Show password</label>
                    </div>
                    <button className="btn btn-info mt-4 w-100 text-white fs-5">Log in</button>
                </form>
            </div>)}
        </div>
    )
}


export default Login;