import React from 'react';
import { Button } from './Button';
import {useMutation} from '@apollo/client';

import {REGISTER_TIME_MUTATION} from '../graphql';

import '../assets/css/NewRegister.css'




export const NewRegister = props => {

    const [newRegister] = useMutation(REGISTER_TIME_MUTATION);

    const onSubmit = async input => {
        const {data} = await newRegister({variables:{user: 2, timeRegistered: new Date().toISOString()}})
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
                <input className="new-register-info-date" type="number"/>
            </div>
            <div className="new-register-buttons">
                <Button name="Salvar" className="save-btn" onClick={onSubmit}></Button>
                <Button name="Cancelar" className="cancel-btn" onClick={props.onClick}></Button>
            </div>
        </div>
    )
}