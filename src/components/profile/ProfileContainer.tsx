import React from "react";
import {RootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, setMyStatus, setUserProfileInfo, setUserStatus} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {RouteComponentProps, withRouter } from "react-router"
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: ProfileType
    userStatus: string
}
type mapDispatchToPropsType = {
    setUserProfileInfo: (userId: string) => void
    setUserStatus: (userId: string) => void
    setMyStatus: (newStatus: string) => void
}
type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId || '17229'

        this.props.setUserProfileInfo(userId)

        this.props.setUserStatus(userId)

    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        userStatus={this.props.userStatus}
                        setMyStatus={this.props.setMyStatus}/>
    }
}


//redux part

let mapStateToProps = (state: RootState) => {
    return {
        profile: state.profilePage.profile,
        userStatus: state.profilePage.userStatus,
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {setUserProfileInfo, setUserStatus, setMyStatus}),
    withAuthRedirect,
)(ProfileContainer)

