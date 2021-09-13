import s from "./Users.module.css";
import React from "react";
import {UserType} from "../../types/types";
import {User} from "./user/User";

type UsersPropsType = {
    users: UserType[]
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

        {props.users.map(u => <User id={u.id}
                                    photos={u.photos}
                                    followed={u.followed}
                                    followingInProgress={props.followingInProgress}
                                    unfollow={props.unfollow}
                                    follow={props.follow}
                                    name={u.name}/>)}
    </div>
}
