import React from 'react';

export default props => {
    return(
        <button type={props.type} className={props.className}>{props.name}</button>
    )
}
        
