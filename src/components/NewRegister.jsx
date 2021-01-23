import React, { useState } from 'react';
import { Button } from './Button';
// import {useMutation} from '@apollo/client';
// import formatISO from 'date-fns/formatISO';
import InputMask from "react-input-mask";

// import {REGISTER_TIME_MUTATION} from '../graphql';

import '../assets/css/NewRegister.css'




export const NewRegister = props => {

    // const userId = localStorage.getItem('userId');
    // const dateInputRef = React.createRef(null)
    // const [newRegister] = useMutation(REGISTER_TIME_MUTATION);
    const [dateInput, setDateInput] = useState("");


    const handleInput = e => {
        setDateInput(e.target.value)
    }

    const logInput = () => {
        console.log(dateInput)
    }

    const onSubmit = async input => {
        
        // await newRegister({variables:{user: userId, timeRegistered: formatISO(new Date(2019, 8, 18, 19, 0, 52)) || new Date().toISOString()}})

        // setInputState(dateInputRef.value);
        // console.log(dateInput)
        logInput();

    }

    return(
        <div className="new-register-container-closed" ref={props.reference}>
            <div className="new-register-title">
                <span>Novo Registro</span>
            </div>
            <div className="new-register-info">
                <span>Colaborador</span>
                <span className="new-register-info-name">João Silva</span>
                <span>Data/Hora</span>
                <InputMask  
                    className="new-register-info-date" 
                    mask="99/99/99 99:99"
                    maskPlaceholder="_" 
                    alwaysShowMask 
                    onChange={handleInput}
                ></InputMask>
            </div>
            <div className="new-register-buttons">
                <Button name="Salvar" className="save-btn" onClick={onSubmit}></Button>
                <Button name="Cancelar" className="cancel-btn" onClick={props.onClick}></Button>
            </div>
        </div>
    )
}