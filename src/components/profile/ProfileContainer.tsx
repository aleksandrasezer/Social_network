import React from "react";
import {RootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, setUserProfileInfo} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {RouteComponentProps, withRouter } from "react-router"
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: ProfileType
}
type mapDispatchToPropsType = {
    setUserProfileInfo: (userId: string) => void
}
type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId || '2'
        this.props.setUserProfileInfo(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}


//redux part

let mapStateToProps = (state: RootState) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {setUserProfileInfo}),
    withAuthRedirect,
)(ProfileContainer)

