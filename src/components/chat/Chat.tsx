import React, {useEffect, useState} from "react";
import s from './Chat.module.css'
import MessageForm, {MessageFormDataType} from "../dialogs/messages/message/newMessage/NewMessage";
import {ChatMessage} from "./chat-message/ChatMessage";

const socket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

const Chat:React.FC = () => {

    const [messages, setMessages] = useState<ChatMessageResponseType[]>([])

    const openSocket = () => {
        socket.addEventListener('message',  (resp) => {
            setMessages((prevMessages) => [...prevMessages,...JSON.parse(resp.data)])
        })
    }

    const onAddMessage = (formData: MessageFormDataType) => {
        if (!formData) {
            return
        }
        socket.send(formData.message)
    }

    useEffect(() => openSocket(), [])

    let chatMessages = messages.map(m => <ChatMessage key={m.userId}
                                                      photo={m.photo}
                                                      userName={m.userName}
                                                      message={m.message}/>)

    return (
        <div className={s.chatContainer}>
            <div className={s.messages}>
                {chatMessages}
            </div>

            <MessageForm onSubmit={onAddMessage}/>

        </div>
    )
}

export default Chat

type ChatMessageResponseType = {
    message: string
    photo: string
    userId: number
    userName: string
}


