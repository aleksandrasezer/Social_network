import React from "react";
import {RootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {InitStateType, setAuthLogin} from "../../redux/auth-reducer";
import Header from "./Header";

type HeaderApiContPropsType = {
    data: InitStateType
    setAuthLogin: () => void
}

class HeadApiContainer extends React.Component<HeaderApiContPropsType> {

    componentDidMount() {
        this.props.setAuthLogin()
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

export const HeaderContainer = connect(mapStateToProps,{setAuthLogin})(HeadApiContainer)