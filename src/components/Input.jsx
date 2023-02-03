import React from "react";

const Input = ({name, label, handleChange, value,type}) =>{
    return(
        <div>
            <label htmlFor={name} className="form-label mt-4">{`${label} *`}</label>
            <input 
                className="form-control"
                type={type}
                name={name}
                placeholder={`${name}..`}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default Input;