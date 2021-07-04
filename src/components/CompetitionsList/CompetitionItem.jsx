import React from 'react';
import {Link} from 'react-router-dom';

function CompetitionItem({id, code, area, name, currentSeason}) {
    return (
        <div className="card">
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">{name}</span>
                <p>{area.name}</p>
                <p>{currentSeason ? 
                    `Start: ${currentSeason.startDate} - End: ${currentSeason.endDate}` :
                    null
                }</p>
            </div>
            <div className="card-action">
                <Link to={`/competition/${id}/matches`} className="btn">Matches</Link>
                <Link to={`/competition/${id}/teams`} className="btn right">Teams</Link>
            </div>
        </div>
    )
}

export default CompetitionItem;
