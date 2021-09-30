import React, {useEffect} from "react";
import {UserType} from "../../types/types";
import {User} from "./user/User";
import {useDispatch} from "react-redux";
import {setUsersFromServer} from "../../redux/users-reducer";
import PaginateBoxView from "react-paginate";
import s from './Users.module.css'
import {SearchUsersField} from "../common/search-field/SearchField";

type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    currentPage: number
    followingInProgress: number[]
    isFetching: boolean
    nameSearch: string
    isFollowed: '' | boolean
    onPageChanged: (selectedItem: { selected: number }) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    pageSize: number
    onNextPage: () => void
    onPrevPage: () => void
}

export const Users = ({currentPage, pageSize, totalUsersCount, nameSearch,isFollowed, ...props}: UsersPropsType) => {

    const dispatch = useDispatch()

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    useEffect(() => {
            dispatch(setUsersFromServer(currentPage, pageSize, nameSearch, isFollowed))
        },
        [dispatch,pageSize,currentPage,nameSearch,isFollowed])

    return <div className={s.usersPage}>



        <SearchUsersField />

        <div className={s.usersList}>
            {props.users.map(u => <User key={u.id}
                                        id={u.id}
                                        photos={u.photos}
                                        followed={u.followed}
                                        followingInProgress={props.followingInProgress}
                                        unfollow={props.unfollow}
                                        follow={props.follow}
                                        name={u.name}/>)}
        </div>

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
    </div>
}
