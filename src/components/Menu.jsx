import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Ellipse1} from '../assets/img/Ellipse1.svg';
import {ReactComponent as Ellipse2} from '../assets/img/Ellipse2.svg';
import {ReactComponent as Ellipse3} from '../assets/img/Ellipse3.svg';
import {ReactComponent as DashboardSvg} from "../assets/img/Dashboard.svg";
import {ReactComponent as RegistersSvg} from "../assets/img/Registers.svg"
import {ReactComponent as LogoutSvg} from "../assets/img/Logout.svg"

import '../assets/css/Menu.css'

const logout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('name');
}


export const Menu =  props => {
  
    // GetMyInfo();

    const role = localStorage.getItem('userRole');
    
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