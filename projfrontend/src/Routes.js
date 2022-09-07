import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Signin from './user/Signin';
import Signup from './user/Signup';
import UserHome from './user/UserHome';

export default function MyRoutes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Signin}/>
                <Route path="/signup" exact  component={Signup}/>
                <Route path="/userHome" exact  component={UserHome}/>
            </Switch>
        </BrowserRouter>
    )
}