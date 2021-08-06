import {setAuthUserData} from "./auth-reducer";
import {AppThunk} from "./redux-store";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'

export type AppActionsType = ReturnType<typeof initializingSuccess>

let initState = {
    initialized: false
}

type InitStateType = typeof initState


export const appReducer = (state = initState, action: AppActionsType): InitStateType => {
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

export const initializeApp = (): AppThunk => (dispatch) => {
    let promise = dispatch(setAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializingSuccess())
        })

}

