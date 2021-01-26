import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/PageNotFound.css';

export const PageNotFound = () => {

    return(
        <div className="page-not-found-container">
            <h1 className="page-not-found-container-h1">Página não encontrada :(</h1>
            <Link to="/" className="page-not-found-container-a"><h2>Voltar a página inicial.</h2> </Link>
        </div>
        
    )
}