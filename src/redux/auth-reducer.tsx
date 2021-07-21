import {Dispatch} from "redux";
import {authAPI} from "../dal/api";
import {stopSubmit} from "redux-form";

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
            return {...state, ...action.data}

        default:
            return state
    }
}

const setAuthUserLogin = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        data: {userId, login, email, isAuth}
    } as const
}

export const setAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.getAuthUserData().then(data => {
            if (data.resultCode === 0 ) {
                const {id,login,email} = data.data
                dispatch(setAuthUserLogin(id, login, email,true))
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean = false) => (dispatch: Dispatch<any>) => {
    authAPI.login(email, password, rememberMe).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData())
        } else {
            let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message}));
        }

    })
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserLogin(null, null, null, false))
        }
    })
}
