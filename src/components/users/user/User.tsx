import React from "react";
import s from "./User.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/bryan_avatar.jpg";
import {Button} from "../../Button/Button";

type UserPropsType = {
    id: number
    photos: any
    followed: boolean
    followingInProgress: number[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    name: string
}

export const User = (props: UserPropsType) => {
    console.log(props.followingInProgress)
    return (
        <div key={props.id} className={s.userBody}>
            <div className={s.avatarAndFollow}>
                <div>
                    <NavLink to={`/profile/${props.id}`}>
                        <img src={props.photos.small || userPhoto}
                             className={s.profilePic}
                             alt='avatar'/>
                    </NavLink>
                </div>

                <div>
                    {props.followed
                        ? <Button
                            disabled={props.followingInProgress.some(id => id === props.id)}
                            onClick={() => {props.unfollow(props.id) }}>Unfollow</Button>
                        : <Button
                            disabled={props.followingInProgress.some(id => id === props.id)}
                            onClick={() => { props.follow(props.id) }}>Follow</Button>}
                </div>
            </div>
            <div className={s.infoContainer}>
                <span className={s.nameSurname}>{props.name}</span>

                <span className={s.cityCountry}>{"u.city"}, {"u.country"}</span>
            </div>
        </div>
    )
}