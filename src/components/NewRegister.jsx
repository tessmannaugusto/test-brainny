import React from 'react';
import { Button } from './Button';
import {useMutation} from '@apollo/client';
import InputMask from "react-input-mask";

import {REGISTER_TIME_MUTATION} from '../graphql';

import '../assets/css/NewRegister.css'




export const NewRegister = props => {

    const [newRegister] = useMutation(REGISTER_TIME_MUTATION);

    const userId = localStorage.getItem('userId')

    const onSubmit = async input => {
        await newRegister({variables:{user: userId, timeRegistered: new Date().toISOString()}})
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
                <InputMask className="new-register-info-date" mask=" 9 9 / 9 9 / 9 9    9 9 : 9 9 " maskPlaceholder="_"></InputMask>
            </div>
            <div className="new-register-buttons">
                <Button name="Salvar" className="save-btn" onClick={onSubmit}></Button>
                <Button name="Cancelar" className="cancel-btn" onClick={props.onClick}></Button>
            </div>
        </div>
    )
}