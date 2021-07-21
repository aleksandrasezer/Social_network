import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {InitStateType} from "../../redux/auth-reducer";
import {Button} from "../Button/Button";

type HeaderPropsType = {
    data: InitStateType
    logout: () => void
}

function Header(props: HeaderPropsType) {
    return (
        <div className={s.header}>

            <img src="https://www.clipartkey.com/mpngs/m/67-676200_clip-art-pinterest-rick-and-morty-png.png" alt="logo"/>

            <div className={s.loginBlock}>
                {props.data.isAuth

                    ? <div>{props.data.login} <Button onClick={props.logout}> Log out </Button></div>

                    : <NavLink to={'/login'}>Login</NavLink>

                }
            </div>

        </div>
    )
}

export default Header;