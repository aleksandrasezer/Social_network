import React from "react";
import {addPostAC, removePostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    store: any
}

export function MyPostsContainer(props: MyPostsPropsType) {

    let state = props.store.getState()

    const removePost = (id: string) => props.store.dispatch(removePostAC(id))

    const addPost = () => props.store.dispatch(addPostAC())
    const onPostChange = (text: string) => props.store.dispatch(updateNewPostTextAC(text))

    const onTextClickHandler = () => props.store.dispatch(updateNewPostTextAC(''))

    return <MyPosts posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    addPost={addPost}
                    onPostChange={onPostChange}
                    onTextClickHandler={onTextClickHandler}
                    removePost={removePost}/>

}