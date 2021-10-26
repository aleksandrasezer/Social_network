import React from "react";
import {RootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setMyStatus, setUserProfileInfo, setUserStatus, uploadProfilePic} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {RouteComponentProps, withRouter} from "react-router"
import {compose} from "redux";
import {ProfileType} from "../../types/types";

type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: ProfileType
    userStatus: string
    authorizedUserId: string
    isAuth: boolean
}
type mapDispatchToPropsType = {
    setUserProfileInfo: (userId: string) => void
    setUserStatus: (userId: string) => void
    setMyStatus: (newStatus: string) => void
    uploadProfilePic: (photo: File) => void
}
type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.setUserProfileInfo(userId)
        this.props.setUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile {...this.props}
                        uploadProfilePic={this.props.uploadProfilePic}
                        isOwner={!this.props.match.params.userId}
                        profile={this.props.profile}
                        userStatus={this.props.userStatus}
                        setMyStatus={this.props.setMyStatus}
                        isAuth={this.props.isAuth}/>
    }
}


//redux part

let mapStateToProps = (state: RootState) => {
    return {
        profile: state.profilePage.profile,
        userStatus: state.profilePage.userStatus,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {setUserProfileInfo, setUserStatus, setMyStatus, uploadProfilePic}),
//    withAuthRedirect,
)(ProfileContainer)

