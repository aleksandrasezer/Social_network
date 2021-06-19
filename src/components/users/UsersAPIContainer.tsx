import React from "react";
import {UsersType} from "../../redux/users-reduscer";
import {Users} from "./Users";
import {Preload} from "../common/preload/Preload";
import {Redirect} from "react-router-dom";

type UsersAPIContainerPropsType = {
    users: UsersType
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFetching: boolean
    followingInProgress: number[]
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersFromServer: (currentPage: number, pageSize: number) => void
    isAuth: boolean
}

export class UsersAPIContainer extends React.Component<UsersAPIContainerPropsType> {

    componentDidMount() {
        this.props.setUsersFromServer(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.setUsersFromServer(p,this.props.pageSize)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'} />

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