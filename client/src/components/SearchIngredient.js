import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom';

export default function SearchBar({ fetchIngredient }) {
    let [ searchValue, setSearchValue ] = useState('');

    // let history = useHistory();
    
    const onSubmit = (e) => {
        e.preventDefault();
        // history.push('/search')
        fetchIngredient(searchValue);
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
                placeholder="Enter ingredient name"
                value={searchValue}
                className="searchField" />
                <input
                type="submit"
                className="search-ingredient-button"
                value="Search for an ingredient!"
                />
            </form>
        </div>
    )
}
