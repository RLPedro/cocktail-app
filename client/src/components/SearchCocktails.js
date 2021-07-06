import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom';

export default function SearchBar({ fetchCocktailsByLetter }) {
    let [ searchValue, setSearchValue ] = useState('');

    // let history = useHistory();
    
    const onSubmit = (e) => {
        e.preventDefault();
        // history.push('/search')
        fetchCocktailsByLetter(searchValue);
        // props.searchSaver(searchValue);
        setSearchValue(searchValue = '');
    }

    const onChange = (e) => {
        setSearchValue(searchValue = e.target.value);
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input onChange={onChange}
                autoComplete="off"
                type="text"
                name="search"
                placeholder="Enter a letter"
                value={searchValue}
                className="searchField" />< br/>
                <input
                type="submit"
                className="search-cocktails-button"
                value="Search cocktails starting with a letter!"
                />
            </form>
        </div>
    )
}