import React from "react";
import axios from "axios";
import {UsersType} from "../../redux/users-reduscer";
import {Users} from "./Users";

type UsersAPIContainerPropsType = {
    users: UsersType
    currentPage: number
    totalUsersCount: number
    pageSize: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UsersType) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUsers: number) => void
}

export class UsersAPIContiner extends React.Component<UsersAPIContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pages = []
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        for (let i = 1; i <= pagesCount; i++) pages.push(i)

        return <Users users={this.props.users}
                      pages={pages}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow} />
    }
}