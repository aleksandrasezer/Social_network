import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

function Navbar() {
    return <div className={s.navbar}>
        <div className={s.item}>
            <NavLink activeClassName={s.activeLink} to="/profile">Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink activeClassName={s.activeLink} to="/dialogs">Messages</NavLink>
        </div>
        <div className={s.item}><a href="/feed">News</a></div>
        <div className={s.item}><a href="/music">Music</a></div>
        <div className={s.item}><a href="/settings">Settings</a></div>
    </div>
}

export default Navbar;