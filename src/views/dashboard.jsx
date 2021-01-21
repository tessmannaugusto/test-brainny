import React from 'react';

import { Menu } from '../components/Menu';
import {Content} from '../components/Content';


import '../assets/css/dashboard.css'

export const Dashboard = props => {
    return(
        <div className="dashboard-container">
            <Menu>{props.children}</Menu>
            <Content></Content>
        </div>  
    )
}