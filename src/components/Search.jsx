import React, {useContext} from 'react';
import {useLocation, useHistory} from 'react-router-dom';

import {AppContext} from '../context';

function Search() {
    const {searchValue, setSearchValue} = useContext(AppContext);
    
    const {pathname} = useLocation();
    const {push} = useHistory();
    
    const entity = pathname.includes('competitions') ? 'area' : 'team name';

    const keyDownHandler = (event) => {
        if (event.key === 'Enter') {
            submitHandler();
        }
    }

    const submitHandler = () => {
        push({pathname, search: `?searchValue=${searchValue}`});
    }

    return (
        <div className="input-field">
            <input 
                placeholder={`search by ${entity}`}
                type="search" 
                name="search"
                className="validate"
                onKeyDown={keyDownHandler}
                value={searchValue}
                onChange={(event) => {setSearchValue(event.target.value)}}
            />

            <button className="btn search-btn" onClick={submitHandler}>Search</button>
        </div>
    )
}

export default Search;
