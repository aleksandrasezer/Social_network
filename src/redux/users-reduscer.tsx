import {Dispatch} from "redux";
import {followAPI, usersAPI} from "../dal/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_FOLLOWING_PROGRESS = 'SET_FOLLOWING_PROGRESS'

type ActionsType = ReturnType<typeof follow> | ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |ReturnType<typeof setIsFetching> |
    ReturnType<typeof setFollowingProgress>

export type UsersType = {
    name: string,
    id: number,
    uniqueUrlName: null,
    photos: {
        small: null,
        large: null
    },
    status: null,
    followed: boolean}[]

export type UsersPageType = {
    users: UsersType
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
    pageSize: 100,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW: return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)}
        case UNFOLLOW: return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)}
        case SET_USERS: return {...state, users: action.users}
        case SET_CURRENT_PAGE: return {...state, currentPage: action.pageNumber}
        case SET_TOTAL_USERS_COUNT: return {...state, totalUsersCount: action.totalUsers}
        case SET_IS_FETCHING: return {...state, isFetching: action.isFetching}
        case SET_FOLLOWING_PROGRESS: return {...state, followingInProgress: action.inProgress
                ? [...state.followingInProgress, action.userId]
                :state.followingInProgress.filter(id => id !== action.userId)}
        default: return {...state}
    }
}

const follow = (id: number) => ({type: FOLLOW, id}) as const
const unfollow = (id: number) => ({type: UNFOLLOW, id}) as const
const setUsers = (users: UsersType) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (pageNumber: number) => ({type: SET_CURRENT_PAGE, pageNumber}) as const
const setTotalUsersCount = (totalUsers: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsers}) as const
const setIsFetching = (isFetching: boolean) => ({type: SET_IS_FETCHING, isFetching}) as const
const setFollowingProgress = (inProgress: boolean, userId: number) => ({type: SET_FOLLOWING_PROGRESS, inProgress, userId}) as const

export const setUsersFromServer = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        setIsFetching(true)
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(setIsFetching(false))
        })
    }
}

export const followUser = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        dispatch(setFollowingProgress(true, userId))
        followAPI.followUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(setFollowingProgress(false, userId))
            dispatch(setIsFetching(false))
        })
    }
}

export const unfollowUser = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        dispatch(setFollowingProgress(true, userId))
        followAPI.unfollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userId))
            }
            dispatch(setFollowingProgress(false, userId))
            dispatch(setIsFetching(false))
        })
    }
}
