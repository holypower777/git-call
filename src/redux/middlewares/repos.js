import {GET_REPOS, FETCH_REPOS_ERROR, FETCH_REPOS_SUCCESS} from "../actions/repos";
import {processRepos} from "../actions/repos";
import {apiRequest} from "../actions/api";
import {showSpinner, hideSpinner} from "../actions/ui";

const getReposFlow = ({dispatch}) => (next) => (action) => {
    next(action);

    if (action.type === GET_REPOS) {
        const url = `https://api.github.com/users/${action.payload}/repos`;
        const method = 'GET';

        dispatch(apiRequest(url, method, null, FETCH_REPOS_SUCCESS, FETCH_REPOS_ERROR));
        dispatch(showSpinner())
    }
};

const processReposCollection = ({dispatch}) => (next) => (action) => {
    next(action);

    if (action.type === FETCH_REPOS_SUCCESS) {
        const filteredRepos = action.payload.items.map((repo) => ({name: repo.name, description: repo.description, link: repo.html_url, id: repo.id}));

        dispatch(processRepos(null, filteredRepos));
        dispatch(hideSpinner());
    }

    if (action.type === FETCH_REPOS_ERROR) {
        dispatch(processRepos(action.payload.error, []));
        dispatch(hideSpinner());
    }
};

export default [getReposFlow, processReposCollection];