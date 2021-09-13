import {authAPI} from "../dal/api";
import {stopSubmit} from "redux-form";
import {AppThunk} from "./redux-store";


export type InitStateType = typeof initState
export type AuthActionsType = ReturnType<typeof setAuthUserLogin>

const initState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}

export const authReducer = (state: InitStateType = initState, action: AuthActionsType): InitStateType => {
    switch (action.type) {
        case 'AUTH/SET_USER_DATA':
            return {...state, ...action.payload}
        default:
            return state
    }
}

const setAuthUserLogin = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: 'AUTH/SET_USER_DATA',
        payload: {userId, login, email, isAuth}
    } as const
}

export const setAuthUserData = (): AppThunk => {
    return (dispatch) => {
        authAPI.getAuthUserData().then(data => {
            if (data.resultCode === 0 ) {
                const {id,login,email} = data.data
                dispatch(setAuthUserLogin(id, login, email,true))
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean = false): AppThunk => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData())
        } else {
            let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message}));
        }

    })
}

export const logout = (): AppThunk => (dispatch) => {
    authAPI.logout().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserLogin(null, null, null, false))
        }
    })
}
