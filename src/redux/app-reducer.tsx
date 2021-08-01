import {Dispatch} from "redux";
import {setAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'

type ActionType = ReturnType<typeof initializingSuccess>

let initState = {
    initialized: false
}

type InitStateType = typeof initState


export const appReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state,
            initialized: true}

        default:
            return state
    }
}

const initializingSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    } as const
}

export const initializeApp = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(setAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializingSuccess())
        })

}

