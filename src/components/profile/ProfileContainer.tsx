import React from "react";
import {RootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, setUserProfileInfo} from "../../redux/profile-reducer";
import Profile from "./Profile";
import { withRouter } from "react-router"
import {Redirect} from "react-router-dom";

type ProfileAPIContainerPropsType = {
    profile: ProfileType
    setUserProfileInfo: (userId: string) => void
    history: any
    location: any
    match: any
    staticContext: any
    isAuth: boolean
}


class ProfileAPIContainer extends React.Component<ProfileAPIContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId || 2
        this.props.setUserProfileInfo(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'} />

        return <Profile profile={this.props.profile}/>
    }
}


//redux part

let mapStateToProps = (state: RootState) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
}

export const ProfileContainer = connect(mapStateToProps, {setUserProfileInfo})(withRouter(ProfileAPIContainer))
