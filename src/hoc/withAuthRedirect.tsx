import React, {ComponentType} from "react";
import {RootState} from "../redux/redux-store";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: RootState) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: MapStatePropsType) {
        const {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to="/login"/>
        }
        return <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
}
