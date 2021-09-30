import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {Switch, HashRouter, Route} from "react-router-dom";
import HeadApiContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import ProfileContainer from "./components/profile/ProfileContainer";
import UsersContainer from "./components/users/UsersContainer";
import Dialogs from "./components/dialogs/DialogsContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {RootState} from "./redux/redux-store";
import {Preload} from "./components/common/preload/Preload";
import {Music} from "./components/music/Music";
import {Video} from "./components/video/Video";
import {Chat} from "./components/chat/Chat";

type AppPropsType = {
    initializeApp: () => void
    initialized: boolean
}

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preload/>
        }
        return (
            <HashRouter>
                <div className="app_wrapper">
                    <HeadApiContainer/>
                    <Navbar/>
                    <div className="app_wrapper_content">
                        <Switch>
                            <Route path='/' exact render={() => <ProfileContainer/>}/>
                            <Route path='/dialogs' render={() => <Dialogs/>}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/chat' render={() => <Chat/>}/>
                            <Route path='/video' render={() => <Video/>}/>
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

const mapStateToProps = (state: RootState) => ({initialized: state.app.initialized})


export default connect(mapStateToProps, {initializeApp})(App)
