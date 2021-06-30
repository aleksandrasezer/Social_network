import React from "react";
import s from "./ProfileInfo.module.css"
import {Preload} from "../../common/preload/Preload";
import {ProfileType} from "../../../redux/profile-reducer";
import avatar from '../../../assets/images/bryan_avatar.jpg'
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType
    userStatus: string
}

function ProfileInfo(props: ProfileInfoPropsType) {

    return <>

        {!props.profile
            ? <Preload/>

            : <div>
                <div>
                    <img src={props.profile.photos.large || avatar} alt='profile_avatar'/>
                </div>

                <ProfileStatus userStatus={props.userStatus}/>

                <div className={s.profileInfo}>
                    {props.profile.fullName} <br/>
                    {props.profile.aboutMe}
                </div>

            </div>
        }
    </>

}

export default ProfileInfo;