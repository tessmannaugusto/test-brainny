import React from 'react';
import { useQuery } from '@apollo/client';

import {DASHBOARD_REGISTERS_QUERY} from '../graphql';

export const Render = () => {

    const {loading, error, data} = useQuery(DASHBOARD_REGISTERS_QUERY)

    if (loading) return <tr><td>Loading..</td><td>Loading..</td><td>Loading..</td></tr>;
    if (error) return <tr><td>Error! {error.message}</td><td></td><td></td></tr>;

    return data.registeredTimes.map((registeredTime, i) => (
        <tr key={i} className="registers-table-tr">
        <td>{registeredTime.user.name}</td>
        <td>{registeredTime.timeRegistered || "12/10/19"}</td> 
        <td className="registers-table-tr-hour">{registeredTime.timeRegistered || "09:50h"}</td>
        </tr>
    )) 
      
}
