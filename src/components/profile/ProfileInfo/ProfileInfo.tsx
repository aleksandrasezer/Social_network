import React from "react";
import s from "./ProfileInfo.module.css"

type ProfileInfoPropsType = {
    img: string
    name: string
    age: number
    aboutMe: string
}

function ProfileInfo(props: ProfileInfoPropsType) {
    return (
        <div>
            <div>
                <img src={props.img} alt='my_profile_avatar'/>
            </div>
            <div className={s.profileInfo}>
                {props.name} <br/>
                {props.age} y.o.<br/>
                {props.aboutMe}
            </div>

        </div>
    )

}

export default ProfileInfo;