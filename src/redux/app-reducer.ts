import {setAuthUserData} from "./auth-reducer";
import {AppThunk} from "./redux-store";

const initState = {
    initialized: false
}

export const appReducer = (state = initState, action: AppActionsType): InitStateType => {
    switch (action.type) {
        case 'APP/INITIALIZED_SUCCESS':
            return {...state, initialized: true}
        default:
            return state
    }
}

//action creators
const initializingSuccess = () => ({type: 'APP/INITIALIZED_SUCCESS'} as const)

//thunk
export const initializeApp = (): AppThunk => (dispatch) => {
    let promise = dispatch(setAuthUserData())
    // @ts-ignore
    Promise.all([promise])
        .then(() => {
            dispatch(initializingSuccess())
        })
}

//types
export type AppActionsType = ReturnType<typeof initializingSuccess>
type InitStateType = typeof initState

