import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from './components/Home/Homepage';
import Auth from './components/Auth/Auth'

export const Routes = ()=>{
    return(
        <Switch>
            <Route exact path="/" component={Auth} />
            <Route path="/home" component={Homepage} />
        </Switch>
    )
};