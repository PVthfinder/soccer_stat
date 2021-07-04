import {Link} from 'react-router-dom';

function Header () {
    return (
        <nav className="deep-purple lighten-1">
            <div className="nav-wrapper">
            <Link to="/" className="brand-logo">SoccerStat</Link>
            </div>
        </nav>
    );
}

export default Header;