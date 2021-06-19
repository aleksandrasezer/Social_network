import {connect} from "react-redux";
import {UsersAPIContainer} from "./UsersAPIContainer";
import {RootState} from "../../redux/redux-store";
import {
    followUser,
    setCurrentPage, setUsersFromServer,
    unfollowUser,
} from "../../redux/users-reduscer";

let mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth,
    }
}

export const UsersContainer = connect(mapStateToProps,
    {
        unfollowUser, followUser, setCurrentPage, setUsersFromServer})(UsersAPIContainer)