import React from 'react';
import { Button } from './Button';


export const NewRegister = props => {

    return(
        <div className="new-register-container">
            <div>
                <span>Novo Registro</span>
            </div>
            <div className="new-register-info">
                <span>Colaborador</span>
                <span className="new-register-info-name">João Silva</span>
                <span>Data/Hora</span>
                <input className="new-register-info-date" type="date"/>
            </div>
            <div className="new-register-buttons">
                <Button name="Salvar" className="save-btn"></Button>
                <Button name="Cancelar" className="cancel-btn"></Button>
            </div>
        </div>
    )
}