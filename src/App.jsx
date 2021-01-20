import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Main} from './components/Main';


import './App.css'

const App = props => {
    return(
        <div>
            <BrowserRouter>
                <Main></Main>
            </BrowserRouter>
        </div>
    )
}

export default App;