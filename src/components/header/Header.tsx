import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {InitStateType, logout} from "../../redux/auth-reducer";
import headerPic from '../../assets/images/header.png'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/redux-store";

export const Header = () => {

    const data = useSelector<RootState, InitStateType>(state => state.auth)
    const dispatch = useDispatch()

    return (
        <div className={s.header}>

            <img src={headerPic}
                 alt="logo"/>

            <div className={s.loginBlock}>
                {data.isAuth

                    ? <div>
                        <NavLink to="/profile">
                            <div className={s.userName}>
                            {data.login}
                        </div>
                        </NavLink>

                        <div className={s.logOut} onClick={() => dispatch(logout())}>
                            Log out
                        </div>
                    </div>

                    : <NavLink to={'/login'}>Login</NavLink>

                }
            </div>

        </div>
    )
}
