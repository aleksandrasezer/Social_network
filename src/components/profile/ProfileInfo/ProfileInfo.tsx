import React from "react";
import s from "./ProfileInfo.module.css"
import {Preload} from "../../common/preload/Preload";
import avatar from '../../../assets/images/bryan_avatar.jpg'
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../../../types/types";

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    const onChangePhotoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.files?.length && props.uploadProfilePic(e.target.files[0])
    }

    return <>
        {!props.profile
            ? <Preload/>
            : <div className={s.profileInfoContainer}>
                <div className={s.profilePicBox}>
                    <img src={props.profile.photos.large || avatar} alt='avatar'/>
                    {props.isOwner && <input type='file'
                                             onChange={onChangePhotoHandler}
                                             className={s.inputPhoto}/>}
                </div>
                <div className={s.profileInfo}>
                    <div className={s.profileName}>
                        {props.profile.fullName}
                    </div>
                    <div className={s.profileStatus}>
                    <ProfileStatus userStatus={props.userStatus}
                                   setMyStatus={props.setMyStatus}
                                   isOwner={props.isOwner}/>
                    </div>
                </div>
            </div>
        }
    </>
}

//types
type ProfileInfoPropsType = {
    profile: ProfileType | null
    userStatus: string
    setMyStatus: (newStatus: string) => void
    uploadProfilePic: (photo: File) => void
    isOwner: boolean
}