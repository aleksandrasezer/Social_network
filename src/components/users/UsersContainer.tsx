import {connect} from "react-redux";
import {UsersAPIContiner} from "./UsersAPIContiner";
import {AppDispatch, RootState} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC, setTotalUsersCountAC, setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reduscer";

let mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
    }
}
let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        follow: (id: number) => dispatch(followAC(id)),
        unfollow: (id: number) => dispatch(unfollowAC(id)),
        setUsers: (users: UsersType) => dispatch(setUsersAC(users)),
        setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUsersCount: (totalUsers: number) => dispatch(setTotalUsersCountAC(totalUsers))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContiner)