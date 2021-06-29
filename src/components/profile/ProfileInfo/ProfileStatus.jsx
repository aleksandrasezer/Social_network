import React, {useState} from "react";

export const ProfileStatus = () => {

    const [editMode, setEditMode] = useState(false)

    const onEditMode = () => setEditMode(true)
    const offEditMode = () => setEditMode(false)

    return (
        <div>
            {!editMode
                ? <div>
                    <span onDoubleClick={() => onEditMode()}>hello</span>
                </div>

                : <div>
                    <span onBlur={() => offEditMode()}><input autoFocus={true} value={'hello'}/></span>
                </div>
            }

        </div>
    )

}