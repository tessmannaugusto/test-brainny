import React from 'react';
import { useQuery } from '@apollo/client';

import { formatDate, formatHour, formatId } from '../utils/formattingDates'
import { MY_REGISTERS_QUERY } from '../graphql';
import { GetMyInfo } from '../utils/getMyInfo';


export const RenderMyRegistersTable = props => {

    const userId = localStorage.getItem('userId');
    
    GetMyInfo();

    const {loading, error, data} = useQuery(MY_REGISTERS_QUERY, {variables: {id: userId }})

    if (loading) return <tr><td>Loading..</td><td>Loading..</td><td>Loading..</td></tr>;
    if (error) return <tr><td>Error! {error.message}</td><td></td><td></td></tr>;


    const dataSortedByTimeRegistered = data.registeredTimes
        .slice()
        .sort((a, b) => {
            if (a.timeRegistered === null || b.timeRegistered === null) {
                return -1;
            }

            return Date.parse(b.timeRegistered) - Date.parse(a.timeRegistered)
        })

    

    return dataSortedByTimeRegistered.map((registeredTime, i) => (
        <tr key={i} className="registers-table-tr">
        <td className="registers-table-tr-name">{registeredTime.user.name}<br></br><small>{formatId(registeredTime.user.id)}</small></td>
        <td className="registers-table-tr-hour">{formatDate(registeredTime.timeRegistered) || "No date available"}</td> 
        <td className="registers-table-tr-hour">{formatHour(registeredTime.timeRegistered) || "No hour available"}</td>
        </tr>
    )) 
      
}