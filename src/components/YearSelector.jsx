import React, {useContext} from 'react';
import {useLocation, useHistory} from 'react-router-dom';

import {AppContext} from '../context';

function YearSelector() {
    const {year, setYear} = useContext(AppContext);
    
    const {pathname} = useLocation();
    const {push} = useHistory();

    let yearsArr = [];
    const currentYear = new Date().getFullYear();

    for (let i=1920; i<=currentYear; i++) {
        yearsArr.push(i);
    }

    const applyYear = (value) => {
        push({pathname, search: `?year=${value}`});
        setYear(value);
    }

    return (
        <div className="input-field">
            <select 
                name="select" 
                value={year} 
                onChange={event => applyYear(event.target.value)}
            >
                <option value="" disabled >Choose year</option>
                {yearsArr.map((item, index) => (
                    <option key={index} value={`${item}`}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default YearSelector;
