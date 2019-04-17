import {API_REQUEST} from "../actions/api";

const apiRequest = ({dispatch}) => (next) => (action) => {
    if (action.type === API_REQUEST) {
        const {url, method, onSuccess, onError} = action.meta;

        fetch(url, {method})
            .then((data) => {
                if (data.status !== 200) {
                    throw new Error(data.statusText);
                }
                return data.json()
            })
            .then((json) => dispatch({type: onSuccess, payload: {error: null, items: json}}))
            .catch((error) => dispatch({type: onError, payload: {error: error.message}}));
    }

    return next(action);
};

export default [apiRequest];