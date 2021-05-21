
let initialState: UsersPageType = {
    users: []
}

export type UsersType = {id: string, profileURL: string, followed: boolean, name: string, surName: string, city: string, country: string}[]

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

export const FollowAC = (id: string) => ({type: 'FOLLOW', id}) as const
export const UnfollowAC = (id: string) => ({type: 'UNFOLLOW', id}) as const
export const SetUsersAC = (users: UsersType) => ({type: 'SET-USERS', users}) as const