import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import {getRepos} from "../redux/actions/repos";

import Spinner from "./Spinner";
import Search from "./Search";
import Repos from "./Repos";

const App = (props) => {
    const {getRepos, pending, repos} = props;

    return (
        <div className='app'>
            <Search getRepos={getRepos}/>
            {pending ? <Spinner/> : <Repos repos={repos}/>}
        </div>
    );
};

App.propTypes = {
    pending: PropTypes.bool,
    repos: PropTypes.object,
    getRepos: PropTypes.func
};

App.defaultProps = {
    pending: false,
    repos: {error: null, items: []},
    getRepos: () => {}
};

const mapStateToProps = (state) => ({
    pending: state.ui.pending,
    repos: state.repos
});

export default connect(
    mapStateToProps,
    {getRepos}
)(App);