import React from "react";
import {followUser, setCurrentPage, setUsersFromServer, unfollowUser} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preload} from "../common/preload/Preload";
import {RootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";

type UsersContainerPropsType = {
    users: UserType[]
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFetching: boolean
    followingInProgress: number[]
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersFromServer: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.setUsersFromServer(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.setUsersFromServer(p,this.props.pageSize)
    }

    render() {

        let pages = []
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        for (let i = 1; i <= pagesCount; i++) pages.push(i)

        return <>

            {this.props.isFetching && <Preload />}

            <Users users={this.props.users}
                   pages={pages}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.followUser}
                   unfollow={this.props.unfollowUser}
                   followingInProgress={this.props.followingInProgress}
                   isFetching={this.props.isFetching}
                   />
        </>
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose<React.ComponentType>(
    //withAuthRedirect,
    connect(mapStateToProps, {unfollowUser, followUser, setCurrentPage, setUsersFromServer}))(UsersContainer)