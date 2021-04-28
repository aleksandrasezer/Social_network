import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../redux/state";

type ProfilePropsType = {
    posts: postsType
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
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
                         addPost={props.addPost}
                         newPostText={props.newPostText}
                         updateNewPostText={props.updateNewPostText}/>
            </div>
        </div>
    )

}

export default Profile;