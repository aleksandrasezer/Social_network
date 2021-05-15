import React from "react";
import s from "./Dialogs.module.css"
import Messages from "./messages/Messages";
import Dialog from "./Dialog/Dialog";
import {DialogType, MessageType} from "../../redux/store";

type DialogsPropsType = {
    messages: MessageType[]
    dialogs: DialogType[]
    newMessageText: string
    addNewMessage: () => void
    onMessageChangeHandler: (text: string) => void
    onTextClickHandler: () => void
}
function Dialogs(props: DialogsPropsType) {

    let dialogsItems = props.dialogs.map((el: DialogType) => <Dialog key={el.id} id={el.id} name={el.name} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsItems }
            </div>
            <div className={s.messages}>
                <Messages   messages={props.messages}
                          newMessageText={props.newMessageText}
                          addNewMessage={props.addNewMessage}
                          onMessageChangeHandler={props.onMessageChangeHandler}
                          onTextClickHandler={props.onTextClickHandler}/>
            </div>
        </div>
    )
}

export default Dialogs;