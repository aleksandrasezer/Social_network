import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {stateType} from "./redux/state";

type AppPropsType = {
    state: stateType
}
function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path='/dialogs' render = {() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                    messages={props.state.dialogsPage.messages}/>} />
                    <Route path='/profile' render = {() => <Profile posts={props.state.profilePage.posts}/>} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
