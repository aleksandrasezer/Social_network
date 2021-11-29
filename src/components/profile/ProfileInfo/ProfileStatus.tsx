import React, {ChangeEvent, useEffect, useState} from "react";

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

    useEffect(() => {
        setStatus(props.userStatus)
    }, [props.userStatus])

    return (
        <div>
            {props.isOwner
                ? (!editMode
                        ? <div>
                            <span title='Click to edit' onClick={onEditMode}
                                  style={{cursor: 'pointer'}}>{props.userStatus || '---'}</span>
                        </div>
                        : <div>
                            <div>
                                <input onBlur={offEditMode}
                                       onChange={onStatusChange}
                                       autoFocus={true}
                                       value={status}/>
                            </div>
                        </div>
                )
                : <span>{props.userStatus || '---'}</span>
            }
        </div>
    )
}

//types
type ProfileStatusPropsType = {
    userStatus: string
    setMyStatus: (newStatus: string) => void
    isOwner: boolean
}