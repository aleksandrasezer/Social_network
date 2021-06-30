import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType
    userStatus: string
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <div className={s.profile}>
                <ProfileInfo profile={props.profile}
                             userStatus={props.userStatus}/>
            </div>
            <div>
                <MyPostsContainer />
            </div>
        </div>
    )

}

export default Profile;