import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType, ProfileType} from "../../../types/types";
import NewPostForm, {FormDataType} from "./newPost/NewPostForm";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    deletePostAC: (id: string) => void
    addPostAC: (newPostText: string) => void
    addLikeAC: (id: string) => void
    profile: ProfileType | null
}

function MyPosts(props: MyPostsPropsType) {

    //posts list
    let myPostsItems = props.posts.map((el) => <Post key={el.id}
                                                     id={el.id}
                                                     postText={el.postText}
                                                     likesCount={el.likesCount}
                                                     deletePost={props.deletePostAC}
                                                     addLike={props.addLikeAC}
                                                     profile={props.profile}/>)

    //handler for add post redux form
    const onAddPost = (formData: FormDataType) => {
        props.addPostAC(formData.newPost)
    }

    return (
        <div className={s.myPosts}>

            <NewPostForm onSubmit={onAddPost} />

            <div>
                { myPostsItems }
            </div>
        </div>
    )

}

export default MyPosts;