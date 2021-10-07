import React from "react";
// import "./style.css";

function Button({ children, handleClick, className }) {
    return (
        <button onClick={handleClick} className={className}>{children}</button>
    )
}
export default Button;