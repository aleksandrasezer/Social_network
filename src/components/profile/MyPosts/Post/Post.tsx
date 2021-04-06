import React from "react";
import s from "./Post.module.css"

type PostType = {
    postText: string
}

function Post(props: PostType) {
    return (
        <div className={s.post}>
            <div>
                <img
                    src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/10/10a06adc92c1746b48b842c031199d692b1ba623_full.jpg"/>
            </div>
            <div>
                Post number {props.postText}
            </div>
            <div>
                <span>Like</span>
                <button>Remove</button>
            </div>
        </div>
    )

}

export default Post;