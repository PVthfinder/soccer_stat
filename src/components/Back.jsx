import {useHistory} from 'react-router-dom';

function Back() {
    const {goBack} = useHistory();
    return (
        <button className="btn back-btn" onClick={goBack}>Back</button>
    )
}

export default Back;
