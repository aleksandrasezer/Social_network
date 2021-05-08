import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostType} from "../../redux/store";

type ProfilePropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <div className={s.profile}>
                <ProfileInfo
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GXs_w8JLLJc_P90Kojd2Pzj649nHhjymWA&usqp=CAU"
                    name="Aleksandra"
                    age={28}
                    aboutMe="Assigned cool at birth"/>
            </div>
            <div>
                <MyPosts posts={props.posts}
                         dispatch={props.dispatch}
                         newPostText={props.newPostText} />
            </div>
        </div>
    )

}

export default Profile;