import { createContext, useReducer } from 'react';
import {useLocation} from 'react-router-dom';

import reducer from './reducer';

export const AppContext = createContext();

const initialState = {
    competitions: [],
    filteredCompetitions: [],
    matches: [],
    filteredMatches: [],
    teams: [],
    filteredTeams: [],
    searchValue: '',
    year: '',
    dateFrom: '',
    dateTo: ''
};

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);
    
    const {search} = useLocation();

    const searchParams = new URLSearchParams(search);

    value.setCompetitions = (data, search) => {
        dispatch({type: 'SET_COMPETITIONS', payload: {data, search}});
    }

    value.setMatches = (data, search) => {
        dispatch({type: 'SET_MATCHES', payload: {data, search}});
    }

    value.setTeams = (data, search) => {
        dispatch({type: 'SET_TEAMS', payload: {data, search}});
    }

    value.setSearchValue = (searchValue) => {
        dispatch({type: 'SET_SEARCH_VALUE', payload: searchValue});
    }

    value.setYear = (year) => {
        dispatch({type: 'SET_YEAR', payload: year});
    }

    value.setDateFrom = (dateFrom) => {
        dispatch({type: 'SET_DATE_FROM', payload: dateFrom});
    }

    value.setDateTo = (dateTo) => {
        dispatch({type: 'SET_DATE_TO', payload: dateTo});
    }

    value.getUrlSearchValue = (str) => {
        if(search.includes(str)){
            return searchParams.get(str);
        } else {
            return '';
        }
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}