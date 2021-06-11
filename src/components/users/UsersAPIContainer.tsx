import React from "react";
import {UsersType} from "../../redux/users-reduscer";
import {Users} from "./Users";
import {Preload} from "../common/preload/Preload";
import {usersAPI} from "../../api/api";

type UsersAPIContainerPropsType = {
    users: UsersType
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFetching: boolean
    followingInProgress: number[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UsersType) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUsers: number) => void
    setIsFetching: (isFetching: boolean) => void
    setFollowingProgress: (inProgress: boolean, userId: number) => void
}

export class UsersAPIContainer extends React.Component<UsersAPIContainerPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
            this.props.setIsFetching(false)
        })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.setIsFetching(true)
        usersAPI.getUsers(p,this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setIsFetching(false)
        })
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
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   setFollowingProgress={this.props.setFollowingProgress}
                   isFetching={this.props.isFetching}
                   setIsFetching={this.props.setIsFetching}
                   />
        </>
    }
}