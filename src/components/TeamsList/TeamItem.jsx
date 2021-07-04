import React from 'react';
import {Link} from 'react-router-dom';

function TeamItem({id, area, name, crestUrl, website}) {
    let imgSrc = "";
    if (crestUrl && crestUrl !== "") {
        imgSrc = crestUrl;
    } else {
        imgSrc = "https://via.placeholder.com/300x200";
    }

    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img 
                    className="activator" 
                    src={imgSrc} 
                    alt={name}
                />
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">{name}</span>
                <p>{area.name}</p>
                <a href={website} className="team-link">Link on official website</a>
            </div>
            <div className="card-action">
                <Link to={`/team/${id}/matches`} className="btn">Matches</Link>
            </div>
        </div>
    )
}

export default TeamItem;
