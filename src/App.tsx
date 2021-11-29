import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {Switch, HashRouter, Route} from "react-router-dom";
import {Login} from "./components/login/Login";
import UsersContainer from "./components/users/UsersContainer";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {RootState} from "./redux/redux-store";
import {Preload} from "./components/common/preload/Preload";
import {Music} from "./components/music/Music";
import {Video} from "./components/video/Video";
import {withSuspense} from "./hoc/withSuspense";
import {Header} from "./components/header/Header";

const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'))
const ChatPage = React.lazy(() => import('./components/chat/Chat'))

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedChatPage = withSuspense(ChatPage)

export const App = () => {

    const isInitialized = useSelector<RootState, boolean>(state => state.app.initialized)
    const dispatch = useDispatch()

    // @ts-ignore
    useEffect(() => dispatch(initializeApp()), [dispatch])

    if (!isInitialized) {
        return <Preload/>
    }
    return (
        <HashRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Switch>
                        <Route path='/' exact render={() => <SuspendedProfile/>}/>
                        <Route path='/dialogs' render={() => <SuspendedDialogs/>}/>
                        <Route path='/profile/:userId?' render={() => <SuspendedProfile/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/chat' render={() => <SuspendedChatPage/>}/>
                        <Route path='/video' render={() => <Video/>}/>
                    </Switch>
                </div>
            </div>
        </HashRouter>
    )
}

