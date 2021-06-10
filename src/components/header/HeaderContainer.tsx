import React from "react";
import {RootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {InitStateType, setAuthUserLogin} from "../../redux/auth-reducer";
import axios from "axios";
import Header from "./Header";

type HeaderApiContPropsType = {
    data: InitStateType
    setAuthUserLogin: (userId: number, login: string, email: string) => void
}

class HeadApiContainer extends React.Component<HeaderApiContPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0 ) {
                const {id,login,email} = response.data.data
                this.props.setAuthUserLogin(id,login,email)
            }
        })
    }

    render() {
        return <Header data={this.props.data}/>
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        data: state.auth,
    }
}

export const HeaderContainer = connect(mapStateToProps,{setAuthUserLogin})(HeadApiContainer)