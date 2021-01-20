import React from 'react';

import { Menu } from '../components/Menu';


import '../assets/css/dashboard.css'

export const Dashboard = props => {
    return(
        <div className="dashboard-container">
            <Menu button=" active">{props.children}</Menu>
            
        </div>  
    )
}