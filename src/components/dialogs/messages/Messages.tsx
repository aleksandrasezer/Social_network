import React from "react";
import s from "./Messages.module.css";
import Message from "./Message";
import {MessageType} from "../../../redux/store";
import {ControlledTextarea} from "../../ControlledTextarea/ControlledTextarea";
import {Button} from "../../Button/Button";

type MessagesPropsType = {
    messages: MessageType[]
    newMessageText: string
    addNewMessage: () => void
    onMessageChangeHandler: (text: string) => void
    onTextClickHandler: () => void
}


function Messages(props: MessagesPropsType) {

    const addNewMessage = () => props.addNewMessage()

    const onMessageChangeHandler = (text: string) => props.onMessageChangeHandler(text)

    let onTextClickHandler = () => props.onTextClickHandler()

    let messagesItems = props.messages.map((el) => <Message key={el.id} id={el.id} message={el.messageText}/>)
    console.log(props.messages)

    return (
        <div>
            <div className={s.messages}>
                {messagesItems}
            </div>
            <div>
                <div>
                    <ControlledTextarea onPostChange={onMessageChangeHandler}
                                        value={props.newMessageText}
                                        onTextClick={onTextClickHandler} />
                </div>
                <div>
                    <Button onClick={addNewMessage}
                            disabled={false}> Send
                    </Button>
                </div>
            </div>
        </div>
    )

}

export default Messages;