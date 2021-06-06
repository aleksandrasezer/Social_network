import {connect} from "react-redux";
import {UsersAPIContainer} from "./UsersAPIContainer";
import {RootState} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage, setIsFetching, setTotalUsersCount, setUsers,
    unfollow,
} from "../../redux/users-reduscer";

let mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
    }
}

export const UsersContainer = connect(mapStateToProps,
    {
        follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, })(UsersAPIContainer)