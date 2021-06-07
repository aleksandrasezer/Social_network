import React from "react";
import {RootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, setUsersProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import axios from "axios";
import { withRouter } from "react-router"

type ProfileAPIContainerPropsType = {
    profile: ProfileType
    setUsersProfile: (profile: ProfileType) => void
    history: any
    location: any
    match: any
    staticContext: any
}


class ProfileAPIContainer extends React.Component<ProfileAPIContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId || 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUsersProfile(response.data)
        })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}


//redux part

let mapStateToProps = (state: RootState) => {
    return {
        profile: state.profilePage.profile
    }
}

export const ProfileContainer = connect(mapStateToProps, {setUsersProfile})(withRouter(ProfileAPIContainer))
