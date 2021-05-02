import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {postsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: postsType
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

function MyPosts(props: MyPostsPropsType) {
    let myPostsItems = props.posts.map((el) => <Post id={el.id} postText={el.postText} likesCount={el.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        props.addPost(props.newPostText)
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            let text = e.currentTarget.value
            props.updateNewPostText(text)
            //alert(text)
        }
    }
    return (
        <div className={s.myPosts}>
            My posts
            <div>
                <div>
                    New post
                </div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
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