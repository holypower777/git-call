import {SHOW_SPINNER, HIDE_SPINNER} from "../actions/ui";

const initUi = {
    pending: false
};

const uiReducer = (state = initUi, {type}) => {
    switch (type) {
        case SHOW_SPINNER:
            return {...state, pending: true};
        case HIDE_SPINNER:
            return {...state, pending: false};
        default:
            return state;
    }
};

export default uiReducer;