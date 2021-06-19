import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {UsersContainer} from "./components/users/UsersContainer";
import {ProfileContainer} from "./components/profile/ProfileContainer";
import {HeaderContainer} from "./components/header/HeaderContainer";
import {Login} from "./components/login/Login";



function App() {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app_wrapper_content">

                    <Route path='/dialogs' render = {() => <DialogsContainer />} />

                    <Route path='/profile/:userId?' render = {() => <ProfileContainer />} />

                    <Route path='/users' render = {() => <UsersContainer />} />

                    <Route path='/login' render = {() => <Login />} />

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
