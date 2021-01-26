import React, { useState } from 'react';
import { Button } from './Button';
import {useMutation, useQuery} from '@apollo/client';
import DatePicker from 'react-datepicker'


import {REGISTER_TIME_MUTATION} from '../graphql';
import {MY_REGISTERS_QUERY} from '../graphql';
import {ME_QUERY} from '../graphql'


import '../assets/css/NewRegister.css'
import "react-datepicker/dist/react-datepicker.css";



export const NewRegister = props => {

    const userId = localStorage.getItem('userId');

    const userName = localStorage.getItem('name');


    const GetMyInfo = () => {
        
        const {loading, error, data} = useQuery(ME_QUERY, {
            fetchPolicy: "network-only"
          })

        if(loading) return null
        if(error) console.log(error)

        console.log(data)

        localStorage.setItem('userId', data.me.id);
        localStorage.setItem('userRole', data.me.role.name);
    }
    
    GetMyInfo();
    // const {loading: nameLoading, error: nameError, data: nameData} = useQuery(MY_REGISTERS_QUERY, {variables: {id: userId }})

    const [newRegister] = useMutation(REGISTER_TIME_MUTATION);
    const [dateInput, setDateInput] = useState(new Date());
    // const [userName, setUserName] = useState("");

    const onSubmit = async () => {
        const utcDate = new Date(dateInput).toISOString();
        
        try {
            await newRegister({variables:{user: userId, timeRegistered: utcDate }})
            props.onClick()
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
