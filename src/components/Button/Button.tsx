import React from "react"
import s from './Button.module.css'

type ButtonPropsTypes = {
    onClick: () => void
    children: string
}

export function Button(props: ButtonPropsTypes) {
    return (
        <>
        <button className={s.buttonStyle}
                onClick={props.onClick}>{props.children}</button>
        </>
    )
}