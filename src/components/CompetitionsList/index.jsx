import React, {useEffect, useContext} from 'react';
import {useLocation} from 'react-router-dom';

import {getAllCompetitions} from '../../api';

import {AppContext} from '../../context';

import CompetitionItem from './CompetitionItem';
import {Preloader, Search} from '../index';

function CompetitionsList() {
    const {
        competitions,
        filteredCompetitions, 
        setCompetitions, 
        getUrlSearchValue
    } = useContext(AppContext);
    
    const {search} = useLocation();

    useEffect(() => {
        getAllCompetitions().then(data => setCompetitions(data.competitions, getUrlSearchValue('searchValue')));
        //eslint-disable-next-line
    }, [search]);

    return (
        competitions.length ?
        <>
            <Search/>
            {filteredCompetitions.length ?
            <div className="list">
                {filteredCompetitions.map(item => (
                    <CompetitionItem key={item.id} {...item}/>
                ))}
            </div> :
            <h4>Sorry, nothing found...</h4>}
        </> :
        <Preloader/>
    )
}

export default CompetitionsList;
