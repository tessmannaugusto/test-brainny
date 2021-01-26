import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './components/Routes';


import './App.css'

const App = props => {
    return(
        <div>
            <BrowserRouter>
                <Routes></Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;