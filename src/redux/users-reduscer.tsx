
let initialState: UsersPageType = {
    users: []
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
}

type ActionsType = ReturnType<typeof FollowAC> | ReturnType<typeof UnfollowAC> | ReturnType<typeof SetUsersAC>

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'FOLLOW': return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)}
        case 'UNFOLLOW': return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)}
        case 'SET-USERS': return {...state, users: action.users}
        default: return {...state}
    }
}

export const FollowAC = (id: number) => ({type: 'FOLLOW', id}) as const
export const UnfollowAC = (id: number) => ({type: 'UNFOLLOW', id}) as const
export const SetUsersAC = (users: UsersType) => ({type: 'SET-USERS', users}) as const