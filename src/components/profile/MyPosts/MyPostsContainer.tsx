import {addPostAC, removePostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {AppDispatch, RootState} from "../../../redux/redux-store";

let mapStateToProps = (state: RootState) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        removePost: (id: string) => dispatch(removePostAC(id)),
        addPost: () => dispatch(addPostAC()),
        onPostChange: (text: string) => dispatch(updateNewPostTextAC(text)),
        onTextClickHandler: () => dispatch(updateNewPostTextAC(''))
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)