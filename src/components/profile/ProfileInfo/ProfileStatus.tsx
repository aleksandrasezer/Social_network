import React, {ChangeEvent, useState} from "react";
import {profileAPI} from "../../../dal/api";

type ProfileStatusPropsType = {
    userStatus: string
    setMyStatus: (newStatus: string) => void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.userStatus)

    const onEditMode = () => setEditMode(true)
    const offEditMode = () => {
        setEditMode(false)
        props.setMyStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    profileAPI.getUserStatus('2').then((response) => console.log(response))

    return (
        <div>
            {!editMode
                ? <div>
                    <span onDoubleClick={onEditMode}>{props.userStatus || '---'}</span>
                </div>

                : <div>
                    <div>
                        <input onBlur={offEditMode}
                               onChange={onStatusChange}
                               autoFocus={true}
                               value={status}/>
                    </div>
                </div>
            }

        </div>
    )

}