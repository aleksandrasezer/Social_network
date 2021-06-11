import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";
import {ControlledTextarea} from "../../ControlledTextarea/ControlledTextarea";
import {Button} from "../../Button/Button";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    removePost: (id: string) => void
    addPost: () => void
    onPostChange: (text: string) => void
    onTextClickHandler: () => void
}

function MyPosts(props: MyPostsPropsType) {
    let myPostsItems = props.posts.map((el) => <Post key={el.id}
                                                     id={el.id}
                                                     postText={el.postText}
                                                     likesCount={el.likesCount}
                                                     removePost={props.removePost}/>)
    const addPost = () => props.addPost()
    const onPostChange = (text: string) => props.onPostChange(text)

    let onTextClickHandler = () => props.onTextClickHandler()

    return (
        <div className={s.myPosts}>
            My posts
            <div>
                <div>
                    <ControlledTextarea onPostChange={onPostChange}
                                        value={props.newPostText}
                                        onTextClick={onTextClickHandler}/>
                    <Button onClick={addPost}
                            disabled={false}>Add post</Button>
                </div>
            </div>
            <div>
                { myPostsItems }
            </div>
        </div>
    )

}

export default MyPosts;