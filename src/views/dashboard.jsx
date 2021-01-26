import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'
import { useQuery } from '@apollo/client';

import { Menu } from '../components/Menu';
import {Content} from '../components/Content';
import { ME_QUERY } from '../graphql';


import '../assets/css/dashboard.css'



export const Dashboard = props => {

    // const GetMyInfo = () => {
        
    //     const {loading, error, data} = useQuery(ME_QUERY)

    //     if(loading) return null
    //     if(error) console.log(error)

    //     localStorage.setItem('userId', data.me.id);
    //     localStorage.setItem('userRole', data.me.role.name);
    // }
    
    // GetMyInfo();


    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [role, setRole] = useState(localStorage.getItem('userRole'));

    return(
        
        <div className="dashboard-container">
            {!token ? <Redirect to="/"/> : null }
            <Menu active="dashboard">{props.children}</Menu>
            {role === "admin" ? <Content MyRegisters={false}></Content>: <h1> Access Denied </h1> }
            
        </div>  
    )
}