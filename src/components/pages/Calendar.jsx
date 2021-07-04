import React, {useEffect, useContext} from 'react';
import {useParams, useLocation} from 'react-router-dom';

import {getMatchesInCompetition, getMatchesOfTeam} from '../../api.js';

import {AppContext} from '../../context';

import {Back, MatchesList} from '../index';

function Calendar() {
    const {
        matches,
        setMatches, 
        setYear, 
        setSearchValue, 
        getUrlSearchValue
    } = useContext(AppContext);
    
    const {id} = useParams();
    
    const {pathname, search} = useLocation();
    
    useEffect(() => {
        if (pathname.includes('competition'))  {
            getMatchesInCompetition(
                id, 
                getUrlSearchValue('year'), 
                getUrlSearchValue('dateFrom'), 
                getUrlSearchValue('dateTo')
            )
                .then(data => setMatches(data.matches, getUrlSearchValue('searchValue')
            ));
        } else if (pathname.includes('team')) {
            getMatchesOfTeam(
                id, 
                getUrlSearchValue('dateFrom'), 
                getUrlSearchValue('dateTo')
            )
                .then(data => setMatches(data.matches,  getUrlSearchValue('searchValue')
            ));

            setYear(getUrlSearchValue('year'));
            setSearchValue(getUrlSearchValue('searchValue'));
        }
        //eslint-disable-next-line
    }, [id, search]);

    return (
        <>
            <Back/>
            {matches ? 
            <MatchesList/>:
            <h4>Sorry, information is not available...</h4>}
        </>
    )
}

export default Calendar;
