import React from 'react'
import "./style.css"

function Input({ label, type, placeholder, icon, onChange, value }) {
    return (
        <div className="input-field">
            <label htmlFor={label}>{label}</label>
            {icon && <img src={icon} />}
            <input type={type} placeholder={placeholder} id={label} onChange={(e) => onChange(e.target.value)} value={value} />
        </div>
    )
}
export default Input;
