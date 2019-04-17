import {GET_REPOS, FETCH_REPOS_ERROR, FETCH_REPOS_SUCCESS} from "../actions/repos";
import {processRepos} from "../actions/repos";
import {apiRequest} from "../actions/api";
import {showSpinner, hideSpinner} from "../actions/ui";

const getReposFlow = ({dispatch}) => (next) => (action) => {
    console.debug(action);

    next(action);

    if (action.type === GET_REPOS) {
        const url = `https://api.github.com/users/${action.payload}/repos`;
        const method = 'GET';

        console.log('api request gone');
        
        dispatch(apiRequest(url, method, null, FETCH_REPOS_SUCCESS, FETCH_REPOS_ERROR));

        console.log('now we need to show spinner');
        
        dispatch(showSpinner())
    }
};

/*
 * Ideas, if there will be some other types of requests:
 * im in to mind should i split functionality
 * or i need to compose these functions into one
 *
 * split pros:
 * 1) easily to debug
 * 2) easily to understand code
 * split cons:
 * 1) needless(?) code
 *
 * compose pros:
 * 1) less code
 * 2) one case for many situations
 * compose cons:
 * 1) sometimes its hard to understand what is going on
 *
 * i decided to split this functionality, because there is
 * little methods to compose them and because its study project
 * it gonna be much convenient for me to control the flow
*/

const processReposCollection = ({dispatch}) => (next) => (action) => {
    next(action);

    if (action.type === FETCH_REPOS_SUCCESS) {
        const filteredRepos = action.payload.items.map((repo) => ({name: repo.name, description: repo.description, link: repo.html_url, id: repo.id}));

        console.log('api request succeeded and data was filtered to ', filteredRepos);

        dispatch(processRepos(null, filteredRepos));

        console.log('so, now we need to hide spinner');

        dispatch(hideSpinner());
    }

    if (action.type === FETCH_REPOS_ERROR) {

        console.log('something happened');

        dispatch(processRepos(action.payload.error, []));

        console.log('so, now we need to hide spinner and show repos');

        dispatch(hideSpinner());
    }
};

export default [getReposFlow, processReposCollection];