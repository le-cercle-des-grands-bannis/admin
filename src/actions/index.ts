import {OPEN_CLOSE_NOTIF, FETCH_ERROR, FETCH_PAYLOAD} from "@Constants/action";


export const openCloseNotificationAction = (open: boolean): {type: string; payload: boolean} => ({
    type: OPEN_CLOSE_NOTIF,
    payload: open
});

export const fetchErrorAction = (message: string | null): {type: string; payload: string | null} => ({
    type: FETCH_ERROR,
    payload: message
});

export const fetchPayloadAction = (message: string | null): {type: string; payload: string | null} => ({
    type: FETCH_PAYLOAD,
    payload: message
});
