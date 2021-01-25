import React from 'react';
import {Link} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {ME_QUERY} from '../graphql';

import {ReactComponent as Ellipse1} from '../assets/img/Ellipse1.svg';
import {ReactComponent as Ellipse2} from '../assets/img/Ellipse2.svg';
import {ReactComponent as Ellipse3} from '../assets/img/Ellipse3.svg';
import {ReactComponent as DashboardSvg} from "../assets/img/Dashboard.svg";
import {ReactComponent as RegistersSvg} from "../assets/img/Registers.svg"
import {ReactComponent as LogoutSvg} from "../assets/img/Logout.svg"

import '../assets/css/Menu.css'




const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
}


export const Menu =  props => {

    
    // const { data, loading, error } =  useQuery(ME_QUERY);

    

    // if(loading) return console.log(loading);
    // if(error) return console.log(error.message);
    
    // return data.me.map((me, i) => (
    //     <h1 key={i} >{me.id}</h1>
    // ))

    const role = localStorage.getItem('role');
    

    return(
        <div className="menu">
            <nav className="menu-nav">
                <ul className="menu-nav-ul">
                    <li>
                        <Ellipse1 className="ellipse-menu-one"></Ellipse1>
                        <Ellipse2 className="ellipse-menu-two"></Ellipse2>
                        <Ellipse3 className="ellipse-menu-three"></Ellipse3>
                    </li>
                    <li className = {`${role === "user" ? "hidden" : null} ${props.active === "dashboard" ? "active": null} `}>
                        <Link to="/dashboard">
                        <DashboardSvg className="nav-svg" />
                        <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className = {props.active === "myRegisters" ? "active": null}>
                        <Link to="/myregisters">
                        <RegistersSvg className="nav-svg" />
                        <span>Meus Registros</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="menu-logout-container">
                <Link to="/">
                    <LogoutSvg className="nav-svg" onClick={logout}/>
                    </Link>
            </div>
        </div>
    )
}