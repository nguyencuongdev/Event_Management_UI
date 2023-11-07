import './Room.css';
import Session from '../Session';

function Room({ data }) {
    const { name, sessions } = data;
    return (
        <div className="event-room-item">
            <h4 className="event-room-name">{name}</h4>
            {sessions.length > 0 ?
                <div className="event-sessions">
                    {sessions.map(session => <Session key={session.id} data={session} />)}
                </div>
                :
                <h4 className='room_message'>Không có phiên nào trong phòng!</h4>
            }
        </div>
    );
}

export default Room;