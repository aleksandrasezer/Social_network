import {followAPI, usersAPI} from "../dal/api";
import {UserType} from "../types/types";
import {AppThunk} from "./redux-store";
import {Dispatch} from "redux";

export type UsersActionsType = ReturnType<typeof follow> | ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> | ReturnType<typeof setIsFetching> |
    ReturnType<typeof setFollowingProgress>

export type UsersPageType = {
    users: UserType[]
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFetching: boolean
    followingInProgress: number[]
}

let initialState: UsersPageType = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 20,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: UsersPageType = initialState, action: UsersActionsType) => {
    switch (action.type) {
        case 'USERS/FOLLOW':
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)}
        case 'USERS/UNFOLLOW':
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)}
        case 'USERS/SET-USERS':
            return {...state, users: action.users}
        case 'USERS/SET-CURRENT-PAGE':
            return {...state, currentPage: action.pageNumber}
        case 'USERS/SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalUsers}
        case 'USERS/SET-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'USERS/SET-FOLLOWING-PROGRESS':
            return {
                ...state, followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return {...state}
    }
}

const follow = (id: number) => ({type: 'USERS/FOLLOW', id}) as const
const unfollow = (id: number) => ({type: 'USERS/UNFOLLOW', id}) as const
const setUsers = (users: UserType[]) => ({type: 'USERS/SET-USERS', users}) as const
export const setCurrentPage = (pageNumber: number) => ({type: 'USERS/SET-CURRENT-PAGE', pageNumber}) as const
const setTotalUsersCount = (totalUsers: number) => ({type: 'USERS/SET-TOTAL-USERS-COUNT', totalUsers}) as const
const setIsFetching = (isFetching: boolean) => ({type: 'USERS/SET-IS-FETCHING', isFetching}) as const
const setFollowingProgress = (inProgress: boolean, userId: number) => ({
    type: 'USERS/SET-FOLLOWING-PROGRESS',
    inProgress,
    userId
}) as const

//thunk
export const setUsersFromServer = (currentPage: number, pageSize: number): AppThunk => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const usersData = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(usersData.items))
        dispatch(setTotalUsersCount(usersData.totalCount))
        dispatch(setIsFetching(false))
    }
}

export const _followUnfollow = async (dispatch: Dispatch,
                                      userId: number,
                                      apiRequest: any,
                                      actionCreator: any) => {
    dispatch(setIsFetching(true))
    setFollowingProgress(true, userId)
    const response = await apiRequest(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
        dispatch(setIsFetching(false))
    }
}

export const followUser = (userId: number): AppThunk => {
    return async (dispatch) => {
        await _followUnfollow(dispatch, userId, followAPI.followUser.bind(followAPI), follow)
    }
}
export const unfollowUser = (userId: number): AppThunk => {
    return async (dispatch) => {
        await _followUnfollow(dispatch, userId, followAPI.unfollowUser.bind(followAPI), unfollow);
    }
}


