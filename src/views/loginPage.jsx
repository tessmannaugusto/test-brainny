import React from 'react';
import {ReactComponent as BackgroundImg}from '../assets/img/Vector.svg';
import {ReactComponent as Ellipse1} from '../assets/img/Ellipse1.svg';
import {ReactComponent as Ellipse2} from '../assets/img/Ellipse2.svg';
import {ReactComponent as Ellipse3} from '../assets/img/Ellipse3.svg';

import Loginform from '../components/LoginForm'



export const LoginPage = props => {
    return(
        <div className="main-container">
            <div className="left-section">
                <div className="logo-container">
                    <Ellipse1 className="ellipse-one"></Ellipse1>
                    <Ellipse2 className="ellipse-two"></Ellipse2>
                    <Ellipse3 className="ellipse-three"></Ellipse3>
                </div>
                <div className="text-container">
                    <h1 className="main-text">Register</h1>
                    <p className="secondary-text">ACCESS CONTROL</p>
                </div>
            </div>
            <div className="right-section">
                <div className="form-container">
                    <Loginform></Loginform>
                </div>
            </div>
            <BackgroundImg className="background-img"></BackgroundImg>
        </div>
    )
}