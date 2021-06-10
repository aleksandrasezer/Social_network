const SET_USER_DATA = 'SET_USER_DATA'

export type InitStateType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

type ActionType = ReturnType<typeof setAuthUserLogin>

let initState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
}

export const authReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}

        default:
            return state
    }
}

export const setAuthUserLogin = (userId: number, login: string, email: string) => {
    return {
        type: SET_USER_DATA,
        data: {userId, login, email}
    } as const
}
