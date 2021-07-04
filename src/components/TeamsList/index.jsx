import React, {useEffect, useContext} from 'react';
import {useParams, useLocation} from 'react-router-dom';

import {getAllTeams, getTeamsInCompetition} from '../../api';

import {AppContext} from '../../context';

import TeamItem from './TeamItem';
import {Preloader, Back, Search, YearSelector} from '../index';

function TeamsList() {
    const {
        teams,
        filteredTeams, 
        setTeams, 
        setYear, 
        setSearchValue, 
        getUrlSearchValue
    } = useContext(AppContext);
    
    const {id} = useParams();
    
    const {pathname, search} = useLocation();

    useEffect(() => {
        if (pathname.includes('competition')) {
            getTeamsInCompetition(id, getUrlSearchValue('year'))
                .then(data => setTeams(data.teams, getUrlSearchValue('searchValue')));
        } else if (pathname.includes('teams')) {
            getAllTeams().then(data => setTeams(data.teams, getUrlSearchValue('searchValue')));
        };
        
        setYear(getUrlSearchValue('year'));
        setSearchValue(getUrlSearchValue('searchValue'));
        //eslint-disable-next-line
    }, [id, search]); 

    return (
        <>
            <Back/>
            {teams.length ?
                (filteredTeams.length ?
                <>
                    <Search/>
                    {pathname.includes('competition') ?
                    <YearSelector/> :
                    null}
                    <div className="list">
                        {filteredTeams.map(item => (
                            <TeamItem key={item.id} {...item}/>
                        ))}
                    </div> 
                </>:
                <h4>Sorry, information is not available...</h4>) :
            <Preloader/>}
        </>
    )
}

export default TeamsList;
