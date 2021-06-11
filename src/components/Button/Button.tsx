import React from "react"
import s from './Button.module.css'

type ButtonPropsTypes = {
    onClick: () => void
    disabled: boolean
    children: string
}

export function Button(props: ButtonPropsTypes) {
    return (
        <>
        <button className={s.buttonStyle}
                disabled={props.disabled}
                onClick={props.onClick}>{props.children}</button>
        </>
    )
}