function reducer (state, {type, payload}) {

    switch(type) {
        case 'SET_COMPETITIONS': {
            const newFilteredCompetitions = payload.search? 
                payload.data.filter(item => 
                    item.area.name.toLowerCase().includes(payload.search)
                ) : 
                payload.data;
            return {
                ...state,
                competitions: payload.data,
                filteredCompetitions: newFilteredCompetitions
            };
        }

        case 'SET_MATCHES':{
            const newFilteredMatches = 
                payload.search ? 
                payload.data.filter(item => (
                    (
                        item.homeTeam.name ?
                        item.homeTeam.name.toLowerCase().includes(payload.search) :
                        false
                    ) ||
                    (
                        item.awayTeam.name ?
                        item.awayTeam.name.toLowerCase().includes(payload.search) :
                        false
                    )
                    )) : 
                payload.data;
            return {
                ...state,
                matches: payload.data,
                filteredMatches: newFilteredMatches
            }
        }

        case 'SET_TEAMS':{
            const newFilteredTeams = payload.search? 
                payload.data.filter(item => 
                    item.name.toLowerCase().includes(payload.search)
                ) : 
                payload.data;
            return {
                ...state,
                teams: payload.data,
                filteredTeams: newFilteredTeams
            }
        }

        case 'SET_SEARCH_VALUE':
            return {
                ...state,
                searchValue: payload
            }

        case 'SET_YEAR':
            return {
                ...state,
                year: payload
            }

        case 'SET_DATE_FROM':
            return {
                ...state,
                dateFrom: payload
            }

        case 'SET_DATE_TO':
            return {
                ...state,
                dateTo: payload
            }

        default:
            return state;
    }
}

export default reducer;