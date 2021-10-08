import React from 'react';
import "./Button.scss"

function Button({name, modified}) {
    return (
        <button className={`button ${modified}`}>
            {name}
        </button>
    )
}

export default Button
