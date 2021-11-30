import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {Switch, HashRouter, Route} from "react-router-dom";
import {Login} from "./components/login/Login";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {RootState} from "./redux/redux-store";
import {Preload} from "./components/common/preload/Preload";
import {Music} from "./components/music/Music";
import {Video} from "./components/video/Video";
import {withSuspense} from "./hoc/withSuspense";
import {Header} from "./components/header/Header";
import Dialogs from "./components/dialogs/Dialogs";
import {Users} from "./components/users/Users";

const Profile = React.lazy(() => import('./components/profile/Profile'))
const ChatPage = React.lazy(() => import('./components/chat/Chat'))

const SuspendedProfile = withSuspense(Profile)
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
                        <Route path='/dialogs' render={() => <Dialogs/>}/>
                        <Route path='/profile/:userId?' render={() => <SuspendedProfile/>}/>
                        <Route path='/users' render={() => <Users/>}/>
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

