import React, {ChangeEvent} from "react";
import s from './ControlledTextarea.module.css';
import {Button} from "../Button/Button";

type ControlledTextareaPropsTYpe = {
    onPostChange: (text: string) => void
    value: string
    onTextClick: () => void
    onPublishPost: () => void
    buttonChild: string
}

export function ControlledTextarea(props: ControlledTextareaPropsTYpe) {

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            let test = e.currentTarget.value
            props.onPostChange(test)
        }
    }

    return (
        <div className={s.input}>
            <textarea onChange={onPostChangeHandler}
                      value={props.value}
                      onClick={props.onTextClick}
                      autoFocus/>
            <Button onClick={props.onPublishPost}>{props.buttonChild}</Button>
        </div>
    )
}