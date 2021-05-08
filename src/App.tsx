import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionTypes, StateType} from "./redux/store";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionTypes) => void
}
function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path='/dialogs' render = {() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                    messages={props.state.dialogsPage.messages}
                                                                    dispatch={props.dispatch}
                                                                    newMessageBody={props.state.dialogsPage.newMessageBody}/>} />
                    <Route path='/profile' render = {() => <Profile posts={props.state.profilePage.posts}
                                                                    dispatch={props.dispatch}
                                                                    newPostText={props.state.profilePage.newPostText} />} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
