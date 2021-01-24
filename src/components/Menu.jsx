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
    localStorage.removeItem('token')
    localStorage.removeItem('role')
}


export const Menu = props => {

    return(
        <div className="menu">
            <nav className="menu-nav">
                <ul className="menu-nav-ul">
                    <li><Link to="/dashboard">
                        <Ellipse1 className="ellipse-menu-one"></Ellipse1>
                        <Ellipse2 className="ellipse-menu-two"></Ellipse2>
                        <Ellipse3 className="ellipse-menu-three"></Ellipse3>
                    </Link></li>
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
                <Link to="/"><LogoutSvg className="nav-svg" onClick={logout}/></Link>
            </div>
        </div>
    )
}