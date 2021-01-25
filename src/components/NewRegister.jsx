import React, { useState } from 'react';
import { Button } from './Button';
import {useMutation} from '@apollo/client';
import DatePicker from 'react-datepicker'


import {REGISTER_TIME_MUTATION} from '../graphql';

import '../assets/css/NewRegister.css'
import "react-datepicker/dist/react-datepicker.css";


export const NewRegister = props => {

    const userId = localStorage.getItem('userId');
    const [newRegister] = useMutation(REGISTER_TIME_MUTATION);
    const [dateInput, setDateInput] = useState(new Date());


    const onSubmit = async () => {
        const utcDate = new Date(dateInput).toISOString();
        
        try {
            await newRegister({variables:{user: userId, timeRegistered: utcDate }})
            props.onClick()
        } catch (error) {
            console.log(error)
        }
    }
    // PUXAR NOME COMPLETO@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    return(
        <div className="new-register-container-closed" ref={props.reference}>
            <div className="new-register-title">
                <span>Novo Registro</span>
            </div>
            <div className="new-register-info">
                <span>Colaborador</span>
                <span className="new-register-info-name">João Silva</span>
                {/* PODERIA USAR ME PRA PEGAR ESSE NOME */}
                <span>Data/Hora</span>
                <DatePicker
                    className="date-picker"
                    selected={dateInput}
                    onChange={date => setDateInput(date)}
                    showTimeSelect
                    dateFormat="dd/MM/yyyy HH:mm"
                    value={dateInput}
                    placeholderText=" __/__/__  __:__ "
                />
            </div>
            <div className="new-register-buttons">
                <Button name="Salvar" className="save-btn" onClick={onSubmit}></Button>
                <Button name="Cancelar" className="cancel-btn" onClick={props.onClick}></Button>
            </div>
        </div>
    )
}
