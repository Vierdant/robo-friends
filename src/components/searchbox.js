import React from 'react';
import '../styles/searchbox.css';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='searchbox'>
            <input type='search' placeholder='Search robots' onChange={searchChange} />
        </div>
    )
}

export default SearchBox;