import React, {useEffect} from "react";
import {User} from "./user/User";
import {useDispatch, useSelector} from "react-redux";
import {followUser, setCurrentPage, setUsersFromServer, unfollowUser} from "../../redux/users-reducer";
import PaginateBoxView from "react-paginate";
import s from './Users.module.css'
import {SearchUsersField} from "../common/search-field/SearchField";
import {RootState} from "../../redux/redux-store";
import {Preload} from "../common/preload/Preload";

export const Users = () => {

    const dispatch = useDispatch()
    const {users,currentPage,totalUsersCount,pageSize,nameSearch,isFollowed,
        followingInProgress,isFetching} = useSelector((state:RootState) => state.usersPage)

    //for pagination
    const onPageChanged = (selectedItem: { selected: number}) => {
        dispatch(setCurrentPage(selectedItem.selected))
        dispatch(setUsersFromServer(selectedItem.selected,pageSize,nameSearch,isFollowed))
    }
    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    useEffect(() => {
            dispatch(setUsersFromServer(currentPage, pageSize, nameSearch, isFollowed))
        },
        [dispatch, pageSize, currentPage, nameSearch, isFollowed])

    return <div className={s.usersPage}>

        {isFetching && <Preload />}
        <SearchUsersField/>
        <div className={s.usersList}>
            {users.map(u => <User key={u.id}
                                        id={u.id}
                                        photos={u.photos}
                                        followed={u.followed}
                                        followingInProgress={followingInProgress}
                                        unfollow={(id: number) => dispatch(unfollowUser(id))}
                                        follow={(id: number) => dispatch(followUser(id))}
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
                             onPageChange={onPageChanged}
                             containerClassName={`${s.pagination}`}
                             activeClassName={`${s.active}`}/>
        </div>
    </div>
}
