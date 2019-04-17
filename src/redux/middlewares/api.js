import {API_REQUEST} from "../actions/api";

const apiRequest = ({dispatch}) => (next) => (action) => {
    if (action.type === API_REQUEST) {
        const {url, method, onSuccess, onError} = action.meta;

        console.log("we're doing api request");

        fetch(url, {method})
            .then((data) => {
                if (data.status !== 200) {
                    throw new Error(data.statusText);
                }
                return data.json()
            })
            .then((json) => dispatch({type: onSuccess, payload: {error: null, items: json}}))
            .catch((error) => dispatch({type: onError, payload: {error: error.message}}));

        console.log('while request is processing we can dispatch other actions');
        console.log('so now, when we waiting for response, lets dispatch show spinner action, to show users, that request is in progress');
        
    }

    return next(action);
};

export default [apiRequest];