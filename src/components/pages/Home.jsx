import {Link} from 'react-router-dom';

function Home() {
    
    return (
        <div className="main-links">
            <Link to="/competitions" className="main-link">Watch all competitions</Link>
            <Link to="/teams" className="main-link">Watch all teams</Link>
        </div>
        
    )
}

export default Home;
