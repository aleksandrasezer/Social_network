import React from "react";
import s from "./ProfileInfo.module.css"
import {Preload} from "../../common/preload/Preload";

type ProfileInfoPropsType = {
    profile: any
}

function ProfileInfo(props: ProfileInfoPropsType) {

    return <>

        {!props.profile
            ? <Preload/>

            : <div>
                <div>
                    <img src={props.profile.photos.large} alt='profile_avatar'/>
                </div>
                <div className={s.profileInfo}>
                    {props.profile.fullName} <br/>
                    {props.profile.lookingForAJobDescription}
                </div>
            </div>
        }
    </>

}

export default ProfileInfo;