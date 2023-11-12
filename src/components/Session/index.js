import { memo } from 'react';
import { Link } from 'react-router-dom';
import './Session.css';

function Session({ data, className, to }) {

    const timeStart = (new Date(data.start)).getHours();
    const timeEnd = (new Date(data.end)).getHours();
    className += ` session-item session-start-${timeStart} session-end-${timeEnd}`;

    let Comp = 'span';
    const prop = {
        className,
    }
    if (to) {
        Comp = Link;
        prop.to = to
    }
    return (
        <Comp {...prop}>
            {data.title}
        </Comp>
    );
}

export default memo(Session);