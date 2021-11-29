import React from "react";
import chatProfilePic from '../../../assets/images/bryan_avatar.jpg'
import s from './ChatMessage.module.css'

export const ChatMessage = (props: ChatMessagePropsType) => {
    return (
        <div>
            <div className={s.message}>
                <div>
                    <img src={props.photo ?? chatProfilePic} alt={'avatar'}/>
                </div>

                <div>
                    <b>{props.userName}</b>
                    <br/>
                    {props.message}
                </div>
            </div>
            <hr/>
        </div>
    )
}

//types
type ChatMessagePropsType = {
    message: string
    photo: string
    userName: string
}
