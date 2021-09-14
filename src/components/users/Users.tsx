import React, {useEffect} from "react";
import {UserType} from "../../types/types";
import {User} from "./user/User";
import {useDispatch} from "react-redux";
import {setUsersFromServer} from "../../redux/users-reducer";
import PaginateBoxView from "react-paginate";
import s from './Users.module.css'

type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    currentPage: number
    followingInProgress: number[]
    isFetching: boolean
    onPageChanged: (selectedItem: { selected: number }) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    pageSize: number
    onNextPage: () => void
    onPrevPage: () => void
}

export const Users = (props: UsersPropsType) => {

    const dispatch = useDispatch()

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    useEffect(() => {
            dispatch(setUsersFromServer(props.currentPage, props.pageSize))
        },
        [dispatch,props.pageSize,props.currentPage])

    return <div className={s.usersPage}>

        <div className={s.paginateContainer}>
            <PaginateBoxView previousLabel={"<"}
                         nextLabel={">"}
                         breakLabel={"..."}
                         breakClassName={"break-me"}
                         pageCount={pagesCount}
                         pageRangeDisplayed={5}
                         marginPagesDisplayed={2}
                         onPageChange={props.onPageChanged}
                         containerClassName={`${s.pagination}`}
            // subContainerClassName={"pages pagination"}
                              activeClassName={`${s.active}`}/>
        </div>

        <div className={s.usersList}>
            {props.users.map(u => <User id={u.id}
                                        photos={u.photos}
                                        followed={u.followed}
                                        followingInProgress={props.followingInProgress}
                                        unfollow={props.unfollow}
                                        follow={props.follow}
                                        name={u.name}/>)}
        </div>
    </div>
}
