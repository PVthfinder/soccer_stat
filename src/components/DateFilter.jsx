import React, {useContext} from 'react';
import {useLocation, useHistory} from 'react-router-dom';

import {AppContext} from '../context';


function DateFilter() {
    const {dateFrom, dateTo, setDateFrom, setDateTo} = useContext(AppContext);
    
    const {pathname} = useLocation();
    const {push} = useHistory();

    const applyDateFilter = () => {
        push({pathname, search: `?dateFrom=${dateFrom}&dateTo=${dateTo}`});
    }

    return (
        <div className="date-filter">
            <label className="filter-label" htmlFor="date-from">From</label>
            <input 
                type="date" 
                id="date-from" 
                className="datepicker"
                onChange={(event) => setDateFrom(event.target.value)}
            />
            <label className="filter-label" htmlFor="date-to">To</label>
            <input 
            type="date" 
            id="date-to" 
            className="datepicker"
            onChange={(event) => setDateTo(event.target.value)}
            />

            <button className="btn filter-btn" onClick={applyDateFilter}>Apply</button>
        </div>
    )
}

export default DateFilter;
