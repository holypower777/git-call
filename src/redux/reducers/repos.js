import {PROCESS_REPOS} from "../actions/repos";

const initRepos = {
    error: null,
    items: []
};

const reposReducer = (state = initRepos, {type, payload}) => {
    switch (type) {
        case PROCESS_REPOS:
            return {...state, error: payload.error, items: payload.items};
        default:
            return state;
    }
};

export default reposReducer;