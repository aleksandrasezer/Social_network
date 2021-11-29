import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import NewPostForm, {PostFormDataType} from "./newPost/NewPostForm";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/redux-store";
import {addLikeAC, addPostAC, deletePostAC} from "../../../redux/profile-reducer";

export const MyPosts = () => {

    const {posts, profile} = useSelector((state: RootState) => state.profilePage)
    const dispatch = useDispatch()

    const myPostsItems = posts.map((el) => <Post key={el.id}
                                               id={el.id}
                                               postText={el.postText}
                                               likesCount={el.likesCount}
                                               deletePost={(id: string) => dispatch(deletePostAC(id))}
                                               addLike={(id: string) => dispatch(addLikeAC(id))}
                                               profile={profile}/>)
    const onAddPost = (formData: PostFormDataType) => {
        dispatch(addPostAC(formData.newPost))
    }

    return (
        <div className={s.myPosts}>
            <NewPostForm onSubmit={onAddPost}/>
            <div>
                {myPostsItems}
            </div>
        </div>
    )
}