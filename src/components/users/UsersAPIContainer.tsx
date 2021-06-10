import React from "react";
import axios from "axios";
import {UsersType} from "../../redux/users-reduscer";
import {Users} from "./Users";
import {Preload} from "../common/preload/Preload";

type UsersAPIContainerPropsType = {
    users: UsersType
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFetching: boolean
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UsersType) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUsers: number) => void
    setIsFetching: (isFetching: boolean) => void
}

export class UsersAPIContainer extends React.Component<UsersAPIContainerPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials: true,
        }).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setIsFetching(false)
        })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`, {
            withCredentials: true,
        }).then(response => {
            this.props.setUsers(response.data.items)
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
                   unfollow={this.props.unfollow}/>
        </>
    }
}