import React, {useContext} from 'react';
import {useLocation} from 'react-router-dom';

import {AppContext} from '../../context';

import MatchItem from './MatchItem';
import {Preloader, Search, YearSelector, DateFilter} from '../index';

function MatchesList() {
    const {filteredMatches} = useContext(AppContext);
    
    const {pathname} = useLocation();

    return (
        <>
        <Search/>
            {filteredMatches ?
                filteredMatches.length ?
                <>
                    {pathname.includes('competition') ?
                    <YearSelector/> :
                    null}
                    <DateFilter/>
                    <div className="list">
                        {filteredMatches.map(item => (
                            <MatchItem key={item.id} {...item}/>
                        ))}
                    </div>
                </> :
                <h4>Sorry, nothing found...</h4> :
            <Preloader/>}
        </>
    )
}

export default MatchesList;
