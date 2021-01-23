import React from 'react';

import {RenderDashboardTable} from './RenderDashboardTable';
import {RenderMyRegistersTable} from './RenderMyRegistersTable';

import '../assets/css/RegistersTable.css'



export const RegistersTable = props => {

    return(
        <div className="registers-table-container">
            <table className="registers-table">
                <thead>
                    <tr className="registers-table-tr-header">
                        <th>Colaborador</th>
                        <th>Data</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {props.MyRegisters ? <RenderMyRegistersTable/> :  <RenderDashboardTable/>}
                    
                </tbody>
                
            </table>
        </div>
    )
}