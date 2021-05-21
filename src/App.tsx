import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {UsersContainer} from "./components/users/UsersContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">

                    <Route path='/dialogs' render = {() => <DialogsContainer />} />

                    <Route path='/profile' render = {() => <Profile />} />

                    <Route path='/users' render = {() => <UsersContainer />} />

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
