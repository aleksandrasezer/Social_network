import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionTypes, addPostAC, PostType, updateNewPostTextAC} from "../../../redux/state";
import {type} from "os";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

function MyPosts(props: MyPostsPropsType) {
    let myPostsItems = props.posts.map((el) => <Post id={el.id}
                                                     postText={el.postText}
                                                     likesCount={el.likesCount}/>)
    let addPost = () => {
        props.dispatch(addPostAC())
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            let text = e.currentTarget.value
            props.dispatch(updateNewPostTextAC(text))
            /*alert(text)*/
        }}

    let onTextClickHandler = () => props.dispatch(updateNewPostTextAC(''))

    return (
        <div className={s.myPosts}>
            My posts
            <div>
                <div>
                    New post
                </div>
                <div>
                    <textarea onChange={onPostChange}
                              onClick={onTextClickHandler} value={props.newPostText}/>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                { myPostsItems }
            </div>
        </div>
    )

}

export default MyPosts;