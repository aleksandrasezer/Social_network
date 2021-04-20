import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {postsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: postsType
    addPost: (postMessage: string) => void
}

function MyPosts(props: MyPostsPropsType) {
    let myPostsItems = props.posts.map((el) => <Post id={el.id} postText={el.postText} likesCount={el.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
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
                    <textarea ref={newPostElement} />
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