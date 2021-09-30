import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

function Navbar() {
    return <div className={s.navbar}>
        <div className={s.item}>
            <NavLink activeClassName={s.activeLink} to="/profile">
                <div className={s.linkName}>Profile</div>
            </NavLink>
        </div>

        <div className={s.item}>
            <NavLink activeClassName={s.activeLink} to="/dialogs">
                <div className={s.linkName}>Messages</div>
            </NavLink>
        </div>

        <div className={s.item}>
            <NavLink activeClassName={s.activeLink} to='/users'>
                <div className={s.linkName}>Users</div>

            </NavLink>
        </div>

        <div className={s.item}>
            <NavLink activeClassName={s.activeLink} to='/chat'>
                <div className={s.linkName}>Chat</div>
            </NavLink>
        </div>

        <div className={s.item}>
            <NavLink activeClassName={s.activeLink} to='/music'>
                <div className={s.linkName}>Music</div>
            </NavLink>
        </div>

        <div className={s.item}>
            <NavLink activeClassName={s.activeLink} to='/video'>
                <div className={s.linkName}>Video</div>
            </NavLink>
        </div>

    </div>
}

export default Navbar;