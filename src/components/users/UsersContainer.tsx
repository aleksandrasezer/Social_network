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
    getUsers, isFollowed, nameSearch
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";

type UsersContainerPropsType = {
    users: UserType[]
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFetching: boolean
    isFollowed: '' | boolean
    nameSearch: string
    followingInProgress: number[]
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersFromServer: (currentPage: number, pageSize: number, nameSearch: string, isFollowed: '' | boolean) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    onPageChanged = (selectedItem: { selected: number}) => {
        this.props.setCurrentPage(selectedItem.selected)
        this.props.setUsersFromServer(selectedItem.selected,this.props.pageSize,this.props.nameSearch,this.props.isFollowed)
    }
    onNextPage = () => {
        this.props.setCurrentPage(this.props.currentPage + 1)
    }
    onPrevPage = () => {
        this.props.setCurrentPage(this.props.currentPage - 1)
    }

    render() {

        return <>

            {this.props.isFetching && <Preload />}

            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   nameSearch={this.props.nameSearch}
                   isFollowed={this.props.isFollowed}
                   follow={this.props.followUser}
                   unfollow={this.props.unfollowUser}
                   followingInProgress={this.props.followingInProgress}
                   isFetching={this.props.isFetching}
                   onNextPage={this.onNextPage}
                   onPrevPage={this.onPrevPage}
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
        nameSearch: nameSearch(state),
        isFollowed: isFollowed(state),
    }
}

export default compose<React.ComponentType>(
    //withAuthRedirect,
    connect(mapStateToProps, {unfollowUser, followUser, setCurrentPage, setUsersFromServer}))(UsersContainer)