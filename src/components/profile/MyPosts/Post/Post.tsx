import React from "react";
import s from "./Post.module.css"
import {ActionTypes, PostType} from "../../../../redux/store";
import {Button} from "../../../Button/Button";
import {removePostAC} from "../../../../redux/profile-reducer";

type PostPropsType = PostType &
    {dispatch: (action: ActionTypes) => void}

function Post(props: PostPropsType) {

    const removePost = (id: string) => props.dispatch(removePostAC(id))

    return (
        <div className={s.post}>
            <div className={s.postBody}>
                <div className={s.postAvatar}>
                    <img src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/10/10a06adc92c1746b48b842c031199d692b1ba623_full.jpg'/>
                </div>
                <div className={s.postText}>
                    {props.postText}
                </div>
            </div>
            <div className={s.likeArea}>
                <span>likesCount = {props.likesCount}</span>
                <Button onClick={() => removePost(props.id)}> Remove </Button>
            </div>
        </div>
    )

}

export default Post;