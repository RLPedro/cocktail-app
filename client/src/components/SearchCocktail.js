import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom';

export default function SearchBar({ fetchCocktail}) {
    let [ searchValue, setSearchValue ] = useState('');

    // let history = useHistory();
    
    const onSubmit = (e) => {
        e.preventDefault();
        // history.push('/search')
        fetchCocktail(searchValue);
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
                placeholder="Enter cocktail name"
                value={searchValue}
                className="searchField" />< br/>
                <input
                type="submit"
                className="search-cocktail-button"
                value="Search for a cocktail!"
                />
            </form>
        </div>
    )
}
