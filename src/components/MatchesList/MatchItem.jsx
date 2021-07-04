import React from 'react';

function MatchItem({utcDate, status, score, homeTeam, awayTeam}) {
    let scoreHomeTeam = '';
    let scoreAwayTeam = '';

    if (status === 'FINISHED') {
        scoreHomeTeam = score.fullTime.homeTeam;
        scoreAwayTeam = score.fullTime.awayTeam;
    }

    return (
        <div className="card">
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">
                    {`${homeTeam.name ?? 'not defined yet'} ${scoreHomeTeam} : 
                    ${scoreAwayTeam} ${awayTeam.name ?? 'not defined yet'}`}
                </span>
                <p>{utcDate.split('T')[0]}</p>
                <p>{status}</p>
            </div>
        </div>
    )
}

export default MatchItem;
