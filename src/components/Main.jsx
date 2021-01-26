import React from 'react';
import { Switch , Route } from 'react-router-dom';

import { LoginPage } from '../views/loginPage';
import { Dashboard } from '../views/dashboard';
import { MyRegisters } from '../views/myRegisters';
import { PageNotFound } from './PageNotFound';


export const Main = props => {

    return(
        <main>
            <Switch>
                <Route exact path="/" >
                    <LoginPage></LoginPage>
                </Route>
                <Route path="/dashboard">
                    <Dashboard></Dashboard>
                </Route>
                <Route path="/myregisters">
                    <MyRegisters></MyRegisters>
                </Route>
                <Route path="*">
                    <PageNotFound></PageNotFound>
                </Route>
            </Switch>
        </main>
    )
}