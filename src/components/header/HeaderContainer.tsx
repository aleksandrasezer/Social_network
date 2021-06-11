import React from "react";
import {RootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {InitStateType, setAuthUserLogin} from "../../redux/auth-reducer";
import Header from "./Header";
import {authAPI} from "../../api/api";

type HeaderApiContPropsType = {
    data: InitStateType
    setAuthUserLogin: (userId: number, login: string, email: string) => void
}

class HeadApiContainer extends React.Component<HeaderApiContPropsType> {

    componentDidMount() {
        authAPI.getAuthUserData().then(data => {
            if (data.resultCode === 0 ) {
                const {id,login,email} = data.data
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