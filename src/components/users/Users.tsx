import React from "react";
import {UsersType} from "../../redux/users-reduscer";
import s from './Users.module.css'
import {Button} from "../Button/Button";
import {v1} from "uuid";

type UsersPropsType = {
    users: UsersType
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: UsersType) => void
}

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) props.setUsers([
        {id: v1(), profileURL: 'https://avatarfiles.alphacoders.com/233/thumb-233488.jpg',
            followed: true, name: 'Tatiana', surName: 'Beliaeva', city: 'Severodvinsk', country: 'Russia'},
        {id: v1(), profileURL: 'https://avatarfiles.alphacoders.com/240/thumb-240769.png',
            followed: true, name: 'Darya', surName: 'Korelskaia', city: 'Saint-Petersburg', country: 'Russia'},
        {id: v1(), profileURL: 'https://avatarfiles.alphacoders.com/240/thumb-240772.png',
            followed: true, name: 'Natalia', surName: 'Snopkova', city: 'Saint-Petersburg', country: 'Russia'},
        {id: v1(), profileURL: 'https://avatarfiles.alphacoders.com/237/thumb-237655.jpg',
            followed: false, name: 'Natalia', surName: 'Tebenihina', city: 'Ljubljana', country: 'Slovenia'}
    ])

    return <div>
        {props.users.map(el =>
            <div key={el.id} className={s.userBody}>
                <div className={s.avatarAndFollow}>

                    <div>
                        <img src={el.profileURL} className={s.profilePic} alt='avatar'/>
                    </div>

                    <div>
                        {el.followed
                            ? <Button onClick={() => props.unfollow(el.id)}>Unfollow</Button>
                            : <Button onClick={() => props.follow(el.id)}>Follow</Button>}
                    </div>
                </div>
                <div className={s.infoContainer}>
                    <span className={s.nameSurname}>{el.name} {el.surName[0]}.</span>

                    <span className={s.cityCountry}>{el.city}, {el.country}</span>
                </div>
            </div>)}
    </div>
}