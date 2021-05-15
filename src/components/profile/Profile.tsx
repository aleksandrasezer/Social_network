import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/redux-store";

type ProfilePropsType = {
    store: StoreType
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
                <MyPostsContainer store={props.store} />
            </div>
        </div>
    )

}

export default Profile;