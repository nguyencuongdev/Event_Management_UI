import './Channel.css';
import Room from '../Room';

function Channel({ data = {} }) {
    return (
        <div className="event-channel">
            <h4 className="event-channel-name">{data.name}</h4>
            <div className='event-rooms'>
                {(data.rooms.length) > 0 ?
                    (data.rooms.map((room) => <Room data={room} key={room.id} />))
                    :
                    <h1 className='channel_message'>Không có phòng nào!</h1>
                }
            </div>
        </div>
    );
}

export default Channel;