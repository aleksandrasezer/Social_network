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
                <Post
                    avatar="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/10/10a06adc92c1746b48b842c031199d692b1ba623_full.jpg"
                    postText={"Hello there"}/>
            </div>
            <div>
                <Post
                    avatar="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/10/10a06adc92c1746b48b842c031199d692b1ba623_full.jpg"
                    postText={"It's cold in here"}/>
            </div>
            <div>
                <Post
                    avatar="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/10/10a06adc92c1746b48b842c031199d692b1ba623_full.jpg"
                    postText={"But summer is coming"}/>
            </div>
        </div>
    )

}

export default MyPosts;