import React from 'react';
import {Redirect} from 'react-router-dom'

import { Menu } from '../components/Menu';
import {Content} from '../components/Content';


import '../assets/css/dashboard.css'

const token = localStorage.getItem('token') || null;

export const Dashboard = props => {

    return(
        
        <div className="dashboard-container">
            {!token ? <Redirect to="/"/>: null }
            <Menu>{props.children}</Menu>
            <Content></Content>
        </div>  
    )
}