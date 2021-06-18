import s from "./Users.module.css";
import userPhoto from "../../assets/images/bryan_avatar.jpg";
import {Button} from "../Button/Button";
import React from "react";
import {UsersType} from "../../redux/users-reduscer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: UsersType
    pages: number[]
    currentPage: number
    followingInProgress: number[]
    isFetching: boolean
    onPageChanged: (p: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}

export const Users = (props: UsersPropsType) => {
    return <div>

        <div className={s.pageNumbers}>
            {props.pages.map(p => {
                return <span key={p} className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={() => props.onPageChanged(p)}> {p} </span>
            })}
        </div>

        {props.users.map(u =>
            <div key={u.id} className={s.userBody}>
                <div className={s.avatarAndFollow}>

                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small || userPhoto}
                                 className={s.profilePic}
                                 alt='avatar'/>
                        </NavLink>
                    </div>

                    <div>
                        {u.followed
                            ? <Button
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => { props.unfollow(u.id) }}>Unfollow</Button>
                            : <Button
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => { props.follow(u.id) }}>Follow</Button>}
                    </div>
                </div>
                <div className={s.infoContainer}>
                    <span className={s.nameSurname}>{u.name}</span>

                    <span className={s.cityCountry}>{"u.city"}, {"u.country"}</span>
                </div>
            </div>)}
    </div>
}
