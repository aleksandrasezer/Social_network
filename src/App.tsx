import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">

                    <Route path='/dialogs' render = {() => <DialogsContainer />} />

                    <Route path='/profile' render = {() => <Profile />} />

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
