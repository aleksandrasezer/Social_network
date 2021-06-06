import s from "./Users.module.css";
import userPhoto from "../../assets/images/bryan_avatar.jpg";
import {Button} from "../Button/Button";
import React from "react";
import {UsersType} from "../../redux/users-reduscer";

type UsersPropsType = {
    users: UsersType
    pages: number[]
    currentPage: number
    onPageChanged: (p: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}

export const Users = (props: UsersPropsType) => {
    return <div>

        {props.pages.map(p => {
            return <span className={props.currentPage === p ? s.selectedPage : ''}
                         onClick={() => props.onPageChanged(p)}>{p}</span>
        })}

        {props.users.map(u =>
            <div key={u.id} className={s.userBody}>
                <div className={s.avatarAndFollow}>

                    <div>
                        <img src={u.photos.small || userPhoto}
                             className={s.profilePic}
                             alt='avatar'/>
                    </div>

                    <div>
                        {u.followed
                            ? <Button onClick={() => props.unfollow(u.id)}>Unfollow</Button>
                            : <Button onClick={() => props.follow(u.id)}>Follow</Button>}
                    </div>
                </div>
                <div className={s.infoContainer}>
                    <span className={s.nameSurname}>{u.name} {"u.surName[0]"}.</span>

                    <span className={s.cityCountry}>{"u.city"}, {"u.country"}</span>
                </div>
            </div>)}
    </div>
}
