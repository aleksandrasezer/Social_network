import React from "react";
import s from "./Dialogs.module.css"
import Messages from "./messages/Messages";
import Dialog from "./Dialog/Dialog";
import {DialogType, MessageType} from "../../types/types";

type DialogsPropsType = {
    messages: MessageType[]
    dialogs: DialogType[]
    newMessageText: string
    addMessageAC: (message: string) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsItems = props.dialogs.map((el: DialogType) => <Dialog key={el.id} id={el.id} name={el.name}/>)

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                <Messages messages={props.messages}
                          newMessageText={props.newMessageText}
                          addMessage={props.addMessageAC}/>
            </div>
        </div>
    )
}

export default Dialogs;