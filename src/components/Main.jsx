import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {LoginPage} from '../views/loginPage';
import {Dashboard} from '../views/dashboard';


export const Main = props => {
    return(
        <main>
            <Switch>
                <Route exact path="/">
                    <LoginPage></LoginPage>
                </Route>
                <Route path="/dashboard">
                    <Dashboard></Dashboard>
                </Route>
                <Route path="/myregisters">
                    {/* <MyRegisters></MyRegisters> */}
                    <h1>registers</h1>
                </Route>
                <Route path="*">
                    {/* <NotFound></NotFound> */}
                    <h1>not found</h1>
                </Route>
            </Switch>
        </main>
    )
}