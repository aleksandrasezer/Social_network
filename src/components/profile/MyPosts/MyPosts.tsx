import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={s.myPosts}>
            My posts
            <div>
                <div>
                    New post
                </div>
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                <Post postText={"Hello there"}/>
            </div>
            <div>
                <Post postText={"It's cold in here"}/>
            </div>
            <div>
                <Post postText={"But summer is coming"}/>
            </div>
            <div>
                <Post postText={"Wait little"}/>
            </div>
        </div>
    )

}

export default MyPosts;