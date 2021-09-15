import React from "react";
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";
import morty from '../../../assets/images/morty.png'

type DialogPropsType = {
    id: string
    name: string
}

function Dialog(props: DialogPropsType) {
    return (
        <div>

            <div className={s.dialog}>
                <div className={s.avatar}>
                    <img src={morty} alt='avatar'/>
                </div>
                <NavLink activeClassName={s.activeDialog} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default Dialog;