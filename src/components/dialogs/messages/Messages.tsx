import React from "react";
import s from "./Messages.module.css";
import Message from "./Message";
import {MessageType} from "../../../redux/store";
import {Button} from "../../Button/Button";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MessagesPropsType = {
    messages: MessageType[]
    newMessageText: string
}

type FormDataType = {
    massage: string
}
const MessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                <Field placeholder={'message'} name={'message'} component={'input'}/>
                </div>

                <div>
                <Button>Send</Button>
                </div>
            </form>
        </div>
    )
}
const MessageReduxForm = reduxForm<FormDataType>({form: 'message'})(MessageForm)

function Messages(props: MessagesPropsType) {

        let messagesItems = props.messages.map((el) => <Message key={el.id} id={el.id} message={el.messageText}/>)
    console.log(props.messages)

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <div className={s.messages}>
                {messagesItems}
            </div>

            <MessageReduxForm onSubmit={onSubmit} />

        </div>
    )

}


export default Messages;