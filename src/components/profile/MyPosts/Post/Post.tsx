import React from "react";
import s from "./Post.module.css"
import {Button} from "../../../Button/Button";
import {PostType} from "../../../../types/types";
import {Likes} from "../../../common/likes/Likes";


type PostPropsType = PostType & {
    deletePost: (id: string) => void
    addLike: (id: string) => void
}

function Post(props: PostPropsType) {

    return (
        <div className={s.post}>
            <div className={s.postBody}>
                <div className={s.postAvatar}>
                    <img
                        src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/10/10a06adc92c1746b48b842c031199d692b1ba623_full.jpg'
                        alt='avatar'/>
                </div>
                <div className={s.postText}>
                    {props.postText}
                </div>
            </div>
            <div className={s.likeArea}>

                <Likes likesCount={props.likesCount}
                       onLike={() => props.addLike(props.id)}/>

                <Button onClick={() => props.deletePost(props.id)}
                        disabled={false}> Delete </Button>
            </div>
        </div>
    )

}

export default Post;