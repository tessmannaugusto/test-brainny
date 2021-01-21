import React from 'react';
import {RegistersTable} from '../components/RegistersTable'

import '../assets/css/Content.css'

export const Content = props => {

    return(
        <main className="content-container">
            <RegistersTable></RegistersTable>

        </main>
    )
}