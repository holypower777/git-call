import React, {useState} from 'react';

const Search = (props) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => setQuery(e.target.value);

    const handleClick = () => {
        if (!query.length) return;
        props.getRepos(query); // calling action getRepos
        setQuery('');
    };

    return (
        <div className='search'>
            <h3>Find repositories by username</h3>
            <div className='search_input'>
                <input value={query} onChange={handleChange} type="text" placeholder="Who's repos you want to find?"/>
                <input type="button" className="button" onClick={handleClick} value="Find"/>
            </div>
        </div>
    );
};

export default Search;