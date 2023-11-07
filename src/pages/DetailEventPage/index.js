import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailEvent.css';
import { Channel } from '../../components';

function DetailEventPage() {
    const { event_slug } = useParams();
    const [inforEvent, setInforEvent] = useState(null);

    useEffect(() => {
        const getDetailEvent = async (slug) => {
            const res = await fetch('http://localhost:8000/XX_NguyenManhCuong/api/v1/organizers/demo1/events/' + slug);
            const data = await res.json();
            setInforEvent(data);
        }
        getDetailEvent(event_slug);
    }, [event_slug]);

    return (
        <div className='detail_event'>
            <div className='event_title'>
                <h2 className='event-name'>{inforEvent?.name}</h2>
                <button className='btn btn-primary btn-regis_event'>Đăng ký sự kiện này</button>
            </div>
            <div className='event-content'>
                <div className="event-content-header">
                    <h4 className='event-content-title'>Kênh</h4>
                    <h4 className='event-content-title'>Phòng</h4>
                    <div className='event-time'>
                        <span className="event-time-item"></span>
                        <span className="event-time-item">1:00</span>
                        <span className="event-time-item"></span>
                        <span className="event-time-item">3:00</span>
                        <span className="event-time-item"></span>
                        <span className="event-time-item">5:00</span>
                        <span className="event-time-item"></span>
                        <span className="event-time-item">7:00</span>
                        <span className="event-time-item"></span>
                        <span className="event-time-item">9:00</span>
                        <span className="event-time-item"></span>
                        <span className="event-time-item">11:00</span>
                        <span className="event-time-item"></span>
                        <span className="event-time-item">13:00</span>
                        <span className="event-time-item"></span>
                        <span className="event-time-item">15:00</span>
                        <span className="event-time-item"></span>
                        <span className="event-time-item">17:00</span>
                        <span className="event-time-item"></span>
                        <span className="event-time-item">19:00</span>
                        <span className="event-time-item"></span>
                        <span className="event-time-item">21:00</span>
                        <span className="event-time-item"></span>
                        <span className="event-time-item">23:00</span>
                    </div>
                </div>
                <div className="event-content-body">
                    {inforEvent?.channels?.length > 0 ?
                        inforEvent?.channels.map((channel) => <Channel data={channel} key={channel.id} />)
                        :
                        <h4 className='event_messae'>Sự kiện không có kênh nào!</h4>
                    }
                </div>
            </div>
        </div>
    );
}

export default DetailEventPage;