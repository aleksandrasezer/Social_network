import React from "react";
import s from "./Dialogs.module.css"
import Messages from "./messages/Messages";
import Dialog from "./Dialog/Dialog";
import {ActionTypes, DialogType, MessageType} from "../../redux/store";

type DialogsPropsType = {
    messages: MessageType[]
    dialogs: DialogType[]
    dispatch: (action: ActionTypes) => void
    newMessageBody: string
}
function Dialogs(props: DialogsPropsType) {
    // @ts-ignore
    let dialogsItems = props.dialogs.map((el) => <Dialog id={el.id} name={el.name} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsItems }
            </div>
            <div className={s.messages}>
                <Messages messages={props.messages}
                          newMessageBody={props.newMessageBody}
                          dispatch={props.dispatch}/>
            </div>
        </div>
    )
}

export default Dialogs;