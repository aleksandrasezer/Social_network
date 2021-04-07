import React from "react";
import s from "./Dialogs.module.css"
import Messages from "./messages/Messages";
import {BrowserRouter, NavLink} from "react-router-dom";
import {Route} from "react-router-dom";

function Dialogs() {
    return (
        <BrowserRouter>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.activeDialog} to="/tatiana">Tatiana</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.activeDialog} to="/dasha">Dasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.activeDialog} to="/victor">Victor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.activeDialog} to="/ergun">Ergun</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <Route path="/tatiana" component={Messages} />
                <Route path="/dasha" component={Messages} />
                <Route path="/victor" component={Messages} />
                <Route path="/ergun" component={Messages} />
            </div>
        </div>
        </BrowserRouter>
    )
}

export default Dialogs;