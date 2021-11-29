import React from "react";
import s from "./Dialogs.module.css"
import {Messages} from "./messages/Messages";
import Dialog from "./Dialog/Dialog";
import {DialogType} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {addMessageAC} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Dialogs: React.FC = () => {

    const {messages, dialogs} = useSelector((state:RootState) => state.dialogsPage)
    const dispatch = useDispatch()

    const dialogsItems = dialogs.map((el: DialogType) => <Dialog key={el.id} id={el.id} name={el.name}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                <Messages messages={messages}
                          addMessage={(message: string) => dispatch(addMessageAC(message))}/>
            </div>
        </div>
    )
}
export default withAuthRedirect(Dialogs);