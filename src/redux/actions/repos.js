export const GET_REPOS = '[repos] get repos';
export const FETCH_REPOS_SUCCESS = '[repos] fetch repos success';
export const FETCH_REPOS_ERROR = '[repos] fetch repos error';
export const PROCESS_REPOS = '[repos] process repos';

export const getRepos = (username) => ({
    type: GET_REPOS,
    payload: username
});

export const processRepos = (error,  items) => ({
    type: PROCESS_REPOS,
    payload: {error, items}
});