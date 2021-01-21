import React from 'react';

import '../assets/css/Button.css'

export const Button = props => {
    return(
        <button type={props.type} className={props.className} onClick={props.onClick}>{props.name}</button>
    )
}
        
