import React, {useEffect} from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {setMyStatus, setUserProfileInfo, setUserStatus, uploadProfilePic} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";

function Profile(props: ProfilePropsType) {

    const {profile, userStatus} = useSelector((state:RootState) => state.profilePage)
    const authorizedUserId = useSelector((state:RootState) => state.auth.userId)
    const isAuth = useSelector((state:RootState) => state.auth.isAuth)
    const dispatch = useDispatch()

    const refreshProfile = () => {
        let userId = props.match.params.userId
        if (!userId) {
            // @ts-ignore
            userId = authorizedUserId
            if (!userId) {
                props.history.push('/login')
            }
        }
        dispatch(setUserProfileInfo(userId))
        dispatch(setUserStatus(userId))
    }

    useEffect(() => refreshProfile(), [authorizedUserId, dispatch, props.match.params.userId])

    if (!isAuth) {
        return <Redirect to='/login'/>
    }

    return (
        <div>
            <div className={s.profile}>
                <ProfileInfo profile={profile}
                             isOwner={!props.match.params.userId}
                             userStatus={userStatus}
                             setMyStatus={(newStatus: string) => dispatch(setMyStatus(newStatus))}
                             uploadProfilePic={(photo:File) => dispatch(uploadProfilePic(photo))}/>
            </div>
            <div>
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default withRouter(Profile);

//types
type ProfilePropsType = RouteComponentProps<{userId: string}>