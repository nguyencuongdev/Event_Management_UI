import './Room.css';
import Session from '../Session';
import { memo } from 'react';

function Room({ data, sessionRegisted = [] }) {
    const { name, sessions } = data;
    return (
        <div className="event-room-item">
            <h4 className="event-room-name">{name}</h4>
            {sessions.length > 0 ?
                <div className="event-sessions">
                    {sessions.map(session => {
                        let className = sessionRegisted.includes(session.id) ? 'registed' : '';
                        return <Session key={session.id} data={session} className={className} />
                    })}
                </div>
                :
                <h4 className='room_message'>Không có phiên nào trong phòng!</h4>
            }
        </div>
    );
}

export default memo(Room);