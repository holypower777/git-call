import React from 'react';
import PropTypes from "prop-types";

const Repository = (props) => {
    const {repo: {name, description, link}} = props;

    return (
        <a className="repo" href={link} target="_blank" rel="noopener noreferrer">
            {console.debug(props.repo)}
            <img src="/folder.svg" alt="folder logo"/>
            <div className="repo_info">
                <div>
                    <strong>Project name: </strong>
                    <span>{name}</span>
                </div>
                <div>
                    <strong>Description: </strong>
                    <span>{description}</span>
                </div>
            </div>
        </a>
    );
};

Repository.propTypes = {
    repo: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string
    })
};

Repository.defaultProps = {
    repo: {
        name: '',
        description: '',
        link: ''
    }
};

export default Repository;