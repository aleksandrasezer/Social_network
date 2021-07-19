import React from "react";
import s from './FormControls.module.css'

const FormControl = ({input, meta, child, ...props}: any) => {
    const error = meta.touched && meta.error
    const errorMessage = error ? `${meta.error}` : ' '
    const textareaClass = error ? `${s.errorTextfield}` : undefined

    return <div className={textareaClass}>
        <div>
            {props.children}
        </div>
        <div className={s.errorBlock}>
            <span className={s.errorMessage}>{errorMessage}</span>
        </div>
    </div>
}

export const Textarea = (props: any) => {
    const {input, meta, child,...restProps} = props

    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}