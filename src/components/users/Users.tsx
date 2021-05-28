import React from "react";
import s from './Users.module.css'
import {Button} from "../Button/Button";
import axios from "axios";
import userPhoto from '../../assets/images/bryan_avatar.jpg'
import {UsersType} from "../../redux/users-reduscer";

type UsersPropsType = {
    users: UsersType
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UsersType) => void
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            {this.props.users.map(u =>
                <div key={u.id} className={s.userBody}>
                    <div className={s.avatarAndFollow}>

                        <div>
                            <img src={u.photos.small || userPhoto}
                                 className={s.profilePic}
                                 alt='avatar'/>
                        </div>

                        <div>
                            {u.followed
                                ? <Button onClick={() => this.props.unfollow(u.id)}>Unfollow</Button>
                                : <Button onClick={() => this.props.follow(u.id)}>Follow</Button>}
                        </div>
                    </div>
                    <div className={s.infoContainer}>
                        <span className={s.nameSurname}>{u.name} {"u.surName[0]"}.</span>

                        <span className={s.cityCountry}>{"u.city"}, {"u.country"}</span>
                    </div>
                </div>)}
        </div>
    }
}