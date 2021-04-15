import React from "react";
import s from "./Post.module.css"

type PostType = {
    id: number
    postText: string
    avatar: string
}

function Post(props: PostType) {
    return (
        <div className={s.post}>
            <div className={s.postBody}>
                <div className={s.postAvatar}>
                    <img src={props.avatar}/>
                </div>
                <div className={s.postText}>
                    {props.postText}
                </div>
            </div>
            <div className={s.likeArea}>
                <span>Like</span>
                <button>Remove</button>
            </div>
        </div>
    )

}

export default Post;