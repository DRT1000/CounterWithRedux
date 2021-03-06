import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/localStorage";

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
        counter: counterReducer
    }
)


export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter:store.getState().counter
    })
})

