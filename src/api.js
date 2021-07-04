import {API_KEY, API_URL} from './config';

const getAllCompetitions = async () => {
    const response = await fetch(`${API_URL}competitions`, {
        headers: {
            'X-Auth-Token': API_KEY
        }
    });
    return await response.json();
};

const getMatchesInCompetition = async (competitionId, year='', dateFrom='', dateTo='') => {
    const response = await fetch(
        `${API_URL}competitions/${competitionId}/matches?season=${year}&dateFrom=${dateFrom}&dateTo=${dateTo}`, 
        {
            headers: {
                'X-Auth-Token': API_KEY
            }
        });
    return await response.json();
};

const getAllTeams = async () => {
    const response = await fetch(`${API_URL}teams`, {
        headers: {
            'X-Auth-Token': API_KEY
        }
    });
    return await response.json();
};

const getTeamsInCompetition = async (competitionId, year='') => {
    const response = await 
        fetch(`${API_URL}competitions/${competitionId}/teams?season=${year}`, {
            headers: {
                'X-Auth-Token': API_KEY
            }
        });
    return await response.json();
};

const getMatchesOfTeam = async (teamId, dateFrom='', dateTo='') => {
    const response = await fetch(
        `${API_URL}teams/${teamId}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`, 
        {
        headers: {
            'X-Auth-Token': API_KEY
        }
    });
    return await response.json();
};

export {
    getAllCompetitions, 
    getMatchesInCompetition, 
    getAllTeams, 
    getTeamsInCompetition, 
    getMatchesOfTeam
};