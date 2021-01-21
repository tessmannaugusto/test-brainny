import React from 'react';
import { Button } from './Button';

import '../assets/css/NewRegister.css'


export const NewRegister = props => {

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
                <Button name="Salvar" className="save-btn"></Button>
                <Button name="Cancelar" className="cancel-btn" onClick={props.onClick}></Button>
            </div>
        </div>
    )
}