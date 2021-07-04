import React, {useEffect, useContext} from 'react';
import {useLocation} from 'react-router-dom';

import {getAllCompetitions} from '../../api';

import {AppContext} from '../../context';

import CompetitionItem from './CompetitionItem';
import {Preloader, Search} from '../index';

function CompetitionsList() {
    const {
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
        filteredCompetitions.length ?
        <>
            <Search/>
            <div className="list">
                {filteredCompetitions.map(item => (
                    <CompetitionItem key={item.id} {...item}/>
                ))}
            </div>
        </> :
        <Preloader/>
    )
}

export default CompetitionsList;
