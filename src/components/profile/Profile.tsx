import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/types";
import {Redirect} from "react-router-dom";

type ProfilePropsType = {
    profile: ProfileType | null
    userStatus: string
    setMyStatus: (newStatus: string) => void
    uploadProfilePic: (photo: File) => void
    isAuth: boolean
    isOwner: boolean
}

function Profile(props: ProfilePropsType) {

    if (!props.isAuth) {
        return <Redirect to='/login'/>
    }

    return (
        <div>

            <div className={s.profile}>
                <ProfileInfo profile={props.profile}
                             isOwner={props.isOwner}
                             userStatus={props.userStatus}
                             setMyStatus={props.setMyStatus}
                             uploadProfilePic={props.uploadProfilePic}/>
            </div>
            <div>
                <MyPostsContainer />
            </div>
        </div>
    )

}

export default Profile;