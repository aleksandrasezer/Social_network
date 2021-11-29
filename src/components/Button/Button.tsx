import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react"
import s from './Button.module.css'

export function Button(props: DefaultButtonPropsType) {
    return (
        <span className={s.buttonStyle}>
        <button disabled={props.disabled}
                onClick={props.onClick}>
            {props.children}
        </button>
        </span>
    )
}

//types
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
