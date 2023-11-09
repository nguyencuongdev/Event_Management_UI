import { memo } from 'react';
import { Link } from 'react-router-dom';
import './Session.css';

function Session({ data, className }) {

    const timeStart = (new Date(data.start)).getHours();
    const timeEnd = (new Date(data.end)).getHours();
    className += ` session-item session-start-${timeStart} session-end-${timeEnd}`;

    return (
        <Link className={className} to="#">
            {data.title}
        </Link>
    );
}

export default memo(Session);