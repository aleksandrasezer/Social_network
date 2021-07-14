import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";
import {Button} from "../../Button/Button";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    removePost: (id: string) => void
}

type FormDataType = {
    newPost: string
}

const NewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'how do you feel'} name={'newPost'} component={'input'}/>
                </div>

                <div>
                    <Button>Post</Button>
                </div>
            </form>
        </div>
    )
}
const NewPostReduxForm = reduxForm<FormDataType>({form: 'newPost'})(NewPostForm)

function MyPosts(props: MyPostsPropsType) {
    let myPostsItems = props.posts.map((el) => <Post key={el.id}
                                                     id={el.id}
                                                     postText={el.postText}
                                                     likesCount={el.likesCount}
                                                     removePost={props.removePost}/>)

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div className={s.myPosts}>
            My posts

            <NewPostReduxForm onSubmit={onSubmit} />

            <div>
                { myPostsItems }
            </div>
        </div>
    )

}

export default MyPosts;