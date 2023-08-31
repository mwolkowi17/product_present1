import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

export const Button1 = (props) => {
    return (
        <button {...props} type="button" className="btn btn-primary btn-lg"  >
            {props.title}
        </button>
    )
}