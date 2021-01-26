import React, { useState } from 'react';
import { Button } from './Button';
import { useMutation } from '@apollo/client';
import DatePicker from 'react-datepicker'


import { REGISTER_TIME_MUTATION } from '../graphql';
import {GetMyInfo} from '../utils/getMyInfo';



import '../assets/css/NewRegister.css'
import "react-datepicker/dist/react-datepicker.css";



export const NewRegister = props => {

    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('name');
    
    GetMyInfo();

    const [newRegister] = useMutation(REGISTER_TIME_MUTATION);
    const [dateInput, setDateInput] = useState(new Date());

    const onSubmit = async () => {
        const utcDate = new Date(dateInput).toISOString();
        

        try {
            await newRegister({variables:{user: userId, timeRegistered: utcDate }})
            props.onClick()
            console.log("adicionado em" + utcDate)
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <div className="new-register-container-closed" ref={props.reference}>
            <div className="new-register-title">
                <span>Novo Registro</span>
            </div>
            <div className="new-register-info">
                <span>Colaborador</span>
                <span className="new-register-info-name">{userName}</span>
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
