import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionTypes, addPostAC, PostType, updateNewPostTextAC} from "../../../redux/state";
import {ControlledTextarea} from "../../ControlledTextarea/ControlledTextarea";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

function MyPosts(props: MyPostsPropsType) {
    let myPostsItems = props.posts.map((el) => <Post id={el.id}
                                                     postText={el.postText}
                                                     likesCount={el.likesCount}/>)
    const addPost = () => {
        props.dispatch(addPostAC())
    }
    const onPostChange = (text: string) => {
            props.dispatch(updateNewPostTextAC(text))
        }

    let onTextClickHandler = () => props.dispatch(updateNewPostTextAC(''))

    return (
        <div className={s.myPosts}>
            My posts
            <div>
                <div>
                    New post
                </div>
                <div>
                    <ControlledTextarea onPostChange={onPostChange}
                                        value={props.newPostText}
                                        onTextClick={onTextClickHandler}/>
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