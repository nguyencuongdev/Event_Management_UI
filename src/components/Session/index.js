import { Link } from 'react-router-dom';
import './Session.css';

function Session({ data }) {

    const timeStart = (new Date(data.start)).getHours();
    const timeEnd = (new Date(data.end)).getHours();
    const className = `session-item session-start-${timeStart} session-end-${timeEnd} active`;

    return (
        <Link className={className} to="#">
            {data.title}
        </Link>
    );
}

export default Session;