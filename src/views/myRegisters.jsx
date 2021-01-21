import React, { useRef } from 'react';

import { Menu } from '../components/Menu';
import { Content } from '../components/Content';

import '../assets/css/myRegisters.css'
import { Button } from '../components/Button';
import { NewRegister } from '../components/NewRegister';

export const MyRegisters = (props) => {

    // const toggleButton= (e) => {
    //     if(e.target.className === "active") {
    //         e.target.className = ""
    //         console.log("ae carai")
    //     }else {
    //         e.target.className = "active"
    //         console.log("ae carai")
    //     }
        
    // } @@@@@@@@@@pesquisar depois como funcionar@@@@@@@@@

    
    const newRegisterRef = React.createRef(null)
    const myRegistersContainerRef = React.createRef(null)



    const toggleNewRegister = () => {
        console.log(newRegisterRef);
        if(newRegisterRef.current.className === "new-register-container-closed") {
            newRegisterRef.current.className = "new-register-container-open"
            myRegistersContainerRef.current.className = "my-registers-container-opacity"
        }else {
            newRegisterRef.current.className = "new-register-container-closed"
        }
    }

    return(
        <div className="my-registers-container" ref={myRegistersContainerRef}>
            <Menu>{props.children}</Menu>
            <Content>
                <Button name="Registrar" className="new-register-btn" onClick={toggleNewRegister}></Button>
            </Content>
            <NewRegister reference={newRegisterRef}></NewRegister>
        </div>  
    )
}