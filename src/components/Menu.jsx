import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as DashboardSvg} from "../assets/img/Dashboard.svg";
import {ReactComponent as RegistersSvg} from "../assets/img/Registers.svg"
import {ReactComponent as LogoutSvg} from "../assets/img/Logout.svg"


import '../assets/css/Menu.css'


export const Menu = props => {

    return(
        <div className="menu">
            <nav className="menu-nav">
                <ul className="menu-nav-ul">
                    <li><Link to="/dashboard">Logo</Link></li>
                    <li><Link to="/dashboard">
                        <DashboardSvg className="nav-svg" />
                        <span>Dashboard</span>
                        </Link>
                    </li>
                    <li ><Link to="/myregisters">
                        <RegistersSvg className="nav-svg" />
                        <span>Meus Registros</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="menu-logout-container">
                <Link to="/"><LogoutSvg className="nav-svg" /></Link>
            </div>
        </div>
    )
}