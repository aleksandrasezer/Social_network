import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react"
import s from './Button.module.css'

/*type ButtonPropsTypes = {
    onClick: () => void
    disabled: boolean
    children: string
}*/

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

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