import {connect} from "react-redux";
import {Users} from "./Users";
import {AppDispatch, RootState} from "../../redux/redux-store";
import {FollowAC, SetUsersAC, UnfollowAC, UsersType} from "../../redux/users-reduscer";

let mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        follow: (id: number) => dispatch(FollowAC(id)),
        unfollow: (id: number) => dispatch(UnfollowAC(id)),
        setUsers: (users: UsersType) => dispatch(SetUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)