const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'


let initialState: UsersPageType = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 100,
    isFetching: false,
}

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
}

type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalUsersCountAC> |ReturnType<typeof setIsFetchingAC>

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW: return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)}
        case UNFOLLOW: return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)}
        case SET_USERS: return {...state, users: action.users}
        case SET_CURRENT_PAGE: return {...state, currentPage: action.pageNumber}
        case SET_TOTAL_USERS_COUNT: return {...state, totalUsersCount: action.totalUsers}
        case SET_IS_FETCHING: return {...state, isFetching: action.isFetching}
        default: return {...state}
    }
}

export const followAC = (id: number) => ({type: FOLLOW, id}) as const
export const unfollowAC = (id: number) => ({type: UNFOLLOW, id}) as const
export const setUsersAC = (users: UsersType) => ({type: SET_USERS, users}) as const
export const setCurrentPageAC = (pageNumber: number) => ({type: SET_CURRENT_PAGE, pageNumber}) as const
export const setTotalUsersCountAC = (totalUsers: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsers}) as const
export const setIsFetchingAC = (isFetching: boolean) => ({type: SET_IS_FETCHING, isFetching}) as const