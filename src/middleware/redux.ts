import {FETCH_ERROR, FETCH_PAYLOAD, OPEN_CLOSE_NOTIF, SET_USER} from "@Constants/action";
import {Reducer, compose, createStore} from "redux";

export interface IStore {
    payload: string | null;
    error: string | null;
    openNotif: boolean;
}

const initState: IStore = {
    payload: null,
    error: null,
    openNotif: true,
}

const rootReducer: Reducer<IStore> = (state = initState, action) => {
    switch (action.type) {
        case FETCH_PAYLOAD:
            return {
                ...state,
                payload: action.payload,
                openNotif: Boolean(action.payload)
            };
        case FETCH_ERROR:
            return {
                ...state,
                payload: null,
                error: action.payload,
                openNotif: Boolean(action.payload)
            }
        case OPEN_CLOSE_NOTIF:
            return {
                ...state,
                payload: action.payload ? state.payload : null,
                error: action.payload ? state.error : null,
                openNotif: action.payload
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composeEnhancers = "development" === process.env.NODE_ENV && process.browser ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

export const store = createStore(rootReducer, initState, composeEnhancers());
