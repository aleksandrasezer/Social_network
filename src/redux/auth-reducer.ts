import {authAPI} from "../dal/api";
import {stopSubmit} from "redux-form";
import {AppThunk} from "./redux-store";

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

//action creators
const setAuthUserLogin = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: 'AUTH/SET_USER_DATA',
        payload: {userId, login, email, isAuth}
    } as const
}

//thunk
export const setAuthUserData = (): AppThunk => async (dispatch) => {
    const meData = await authAPI.getAuthUserData()
    if (meData.resultCode === 0) {
        const {id, login, email} = meData.data
        dispatch(setAuthUserLogin(id, login, email, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean = false): AppThunk => async (dispatch) => {
    const loginResp = await authAPI.login(email, password, rememberMe)
    if (loginResp.data.resultCode === 0) {
        dispatch(setAuthUserData())
    } else {
        let message = loginResp.data.messages.length > 0 ? loginResp.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout = (): AppThunk => async (dispatch) => {
    const logoutResp = await authAPI.logout()
    if (logoutResp.data.resultCode === 0) {
        dispatch(setAuthUserLogin(null, null, null, false))
    }
}

//types
export type InitStateType = typeof initState
export type AuthActionsType = ReturnType<typeof setAuthUserLogin>

