import React from "react";
import s from "./Post.module.css"
import {Button} from "../../../Button/Button";
import {PostType, ProfileType} from "../../../../types/types";
import {Likes} from "../../../common/likes/Likes";
import avatar from '../../../../assets/images/bryan_avatar.jpg'


type PostPropsType = PostType & {
    deletePost: (id: string) => void
    addLike: (id: string) => void
    profile: ProfileType | null
}

function Post(props: PostPropsType) {

    const userAvatar = props.profile?.photos.large ?? avatar

    return (
        <div className={s.post}>
            <div className={s.postBody}>
                <div className={s.postAvatar}>
                    <img src={userAvatar} alt='profile_avatar'/>
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