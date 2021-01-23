// import { useQuery } from '@apollo/client';
import React from 'react';

// import {DASHBOARD_REGISTERS_QUERY} from '../graphql';
import {Render} from './RenderTable';
import '../assets/css/RegistersTable.css'



export const RegistersTable = props => {

    
    // const registers = [
        // {
        //     id: 1,
        //     name: "Augusto",
        //     date: "12/09/21",
        //     time: "09:00"
        // },
        //   {
        //     id: 2,
        //     name: "Bruno",
        //     date: "12/09/21",
        //     time: "09:00"
        // },
        //   {
        //     id: 3,
        //     name: "Tayná ",
        //     date: "12/09/21",
        //     time: "09:00"
        // }
        // ,
        //   {
        //     id: 4,
        //     name: "Lucas",
        //     date: "12/09/21",
        //     time: "09:00"
        // }
        // ,
        //   {
        //     id: 5,
        //     name: "Fabio",
        //     date: "12/09/21",
        //     time: "09:00"
        // }
    // ]

    // const mockRegisters = registers.map((register) => {
    //     return (
    //         <tr key={register.id} className="registers-table-tr">
    //             <td>{register.name}</td>
    //             <td>{register.date}</td>
    //             <td>{register.time}</td>
    //         </tr>
    //     )
    // })

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
                    <Render></Render>
                </tbody>
                
            </table>
        </div>
    )
}