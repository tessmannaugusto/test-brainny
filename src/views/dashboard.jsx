import React from 'react';
import { Redirect } from 'react-router-dom'

import { Menu } from '../components/Menu';
import { Content } from '../components/Content';
import { GetMyInfo } from '../utils/getMyInfo';

import '../assets/css/dashboard.css'

export const Dashboard = props => {

    GetMyInfo();

    const token = localStorage.getItem('token') || null;
    const role = localStorage.getItem('userRole');

    return(
        
        <div className="dashboard-container">
            {!token ? <Redirect to="/"/> : null }
            <Menu active="dashboard">{props.children}</Menu>
            {role === "admin" ? <Content MyRegisters={false}></Content>: <h1> Access Denied </h1> }
            
        </div>  
    )
}