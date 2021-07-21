import React from "react";
import {RootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {InitStateType, logout, setAuthUserData} from "../../redux/auth-reducer";
import Header from "./Header";

type HeaderApiContPropsType = {
    data: InitStateType
    setAuthUserData: () => void
    logout: () => void
}

class HeadApiContainer extends React.Component<HeaderApiContPropsType> {

    componentDidMount() {
        this.props.setAuthUserData()
    }

    render() {
        return <Header data={this.props.data} logout={this.props.logout}/>
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        data: state.auth,
    }
}

export default connect(mapStateToProps,{setAuthUserData, logout})(HeadApiContainer)