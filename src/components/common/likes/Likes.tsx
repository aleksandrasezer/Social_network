import React, {useState} from "react";
import s from './Likes.module.css'

type LikesPropsType = {
    likesCount: number
    onLike: () => void
}

export const Likes = (props: LikesPropsType) => {

    const [red, setRed] = useState<boolean>(false)

    const heartClassName = !red ? `${s.heart}` : `${s.red}`

    const onHeartClickHandler = () => {
        props.onLike()
        setRed(true)
    }

    return <div className={s.likesContainer}>

        <div className={s.likesCount}>
            {props.likesCount}
        </div>

        <div title='Like' className={heartClassName} onClick={onHeartClickHandler}></div>

    </div>
}