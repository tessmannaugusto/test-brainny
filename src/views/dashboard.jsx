import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'

import { Menu } from '../components/Menu';
import {Content} from '../components/Content';


import '../assets/css/dashboard.css'



export const Dashboard = props => {


    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [role, setRole] = useState(localStorage.getItem('role'));

    return(
        
        <div className="dashboard-container">
            {!token ? <Redirect to="/"/> : null }
            <Menu>{props.children}</Menu>
            {role === "admin" ? <Content MyRegisters={false}></Content>: <h1> Access Denied </h1> }
            
        </div>  
    )
}