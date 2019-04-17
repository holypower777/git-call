import React from 'react';
import Repository from "./Repository";

const Repos = (props) => {
    const {repos: {items, error}} = props;
    let repositories = items.map((repo) => <Repository repo={repo} key={repo.id}/>);

    return (
        <div className='wrapper'>
            {error ? error : repositories}
        </div>
    );
};

export default Repos;