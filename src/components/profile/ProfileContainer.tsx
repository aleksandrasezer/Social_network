import React from "react";
import {RootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import axios from "axios";

type ProfileAPIContainerPropsType = {
    profile: any
    setProfile: (profile: any) => void
}

class ProfileAPIContainer extends React.Component<ProfileAPIContainerPropsType>  {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setProfile(response.data)
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
export const ProfileContainer = connect(mapStateToProps, {setProfile})(ProfileAPIContainer)
