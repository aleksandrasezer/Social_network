import {addLikeAC, addPostAC, deletePostAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {RootState} from "../../../redux/redux-store";

let mapStateToProps = (state: RootState) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
    }
}

export const MyPostsContainer =
    connect(mapStateToProps, {deletePostAC,addPostAC, addLikeAC})(MyPosts)