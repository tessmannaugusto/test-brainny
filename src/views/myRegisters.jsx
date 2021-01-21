import React from 'react';

import { Menu } from '../components/Menu';
import { Content } from '../components/Content';

import '../assets/css/myRegisters.css'
import { Button } from '../components/Button';
import { NewRegister } from '../components/NewRegister';

export const MyRegisters = props => {

    // const toggleButton= (e) => {
    //     if(e.target.className === "active") {
    //         e.target.className = ""
    //         console.log("ae carai")
    //     }else {
    //         e.target.className = "active"
    //         console.log("ae carai")
    //     }
        
    // } @@@@@@@@@@pesquisar depois como funcionar@@@@@@@@@

    const newRegister = () => {
        console.log("new register");
        
    }

    return(
        <div className="my-registers-container">
            <Menu>{props.children}</Menu>
            <Content>
                <Button name="Registrar" className="new-register-btn" onClick={newRegister}></Button>
            </Content>
            <NewRegister></NewRegister>
        </div>  
    )
}