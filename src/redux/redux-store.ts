import {applyMiddleware, combineReducers, createStore} from "redux";
import {DialogsActionsType, dialogsReducer} from "./dialogs-reducer";
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import {AppActionsType, appReducer} from "./app-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

//types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    ActionsType
    >
type ActionsType = AppActionsType
    | AuthActionsType
    | DialogsActionsType
    | ProfileActionsType
    | UsersActionsType


//@ts-ignore
window.store = store

