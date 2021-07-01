import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reduscer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk"
import {reducer as formReducer} from "redux-form"

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunk))


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


//@ts-ignore
window.store = store

