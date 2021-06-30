import React, {useState} from "react";
import {profileAPI} from "../../../dal/api";

type ProfileStatusPropsType = {
    userStatus: string
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)

    const onEditMode = () => setEditMode(true)
    const offEditMode = () => setEditMode(false)

    profileAPI.getUserStatus('2').then((response) => console.log(response))

    return (
        <div>
            {!editMode
                ? <div>
                    <span onDoubleClick={() => onEditMode()}>{props.userStatus || '---'}</span>
                </div>

                : <div>
                    <span onBlur={() => offEditMode()}><input autoFocus={true} value={'hello'}/></span>
                </div>
            }

        </div>
    )

}