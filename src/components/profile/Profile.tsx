import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profile: any
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <div className={s.profile}>
                <ProfileInfo profile={props.profile}/>
            </div>
            <div>
                <MyPostsContainer />
            </div>
        </div>
    )

}

export default Profile;