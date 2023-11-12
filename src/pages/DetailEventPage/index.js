import { useEffect, useState, useRef, useContext, useCallback } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Channel, FormRegistrationEvent } from '../../components';
import { useCheckEventRegisted } from '../../hooks';
import { StoreContext } from '../../store';
import { getInforDetailEventService } from '../../services';
import './DetailEvent.css';

function DetailEventPage() {
    const navigate = useNavigate();
    const { event_slug } = useParams();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const organizer_slug = searchParams.get('og');
    if (!organizer_slug) navigate('/error-page');

    const [stateStore] = useContext(StoreContext);
    const currentUser = stateStore.currentUser;
    const registedEvents = stateStore.registedEvents;

    const formRegisterRef = useRef(null);
    const [inforEvent, setInforEvent] = useState(null);
    const checkInforEventRegisted = useCheckEventRegisted(event_slug, registedEvents, currentUser);
    const [sessionsOfEvent, setSessionOfEvent] = useState([]);
    const [sessionRegisted, setSessionRegisted] = useState([]);

    useEffect(() => {
        const getDetailEvent = async (organizerSlug, eventSlug) => {
            const data = await getInforDetailEventService(organizerSlug, eventSlug);
            setInforEvent(data);
        }
        getDetailEvent(organizer_slug, event_slug);
    }, [event_slug, organizer_slug])

    useEffect(() => {
        setSessionRegisted(() => {
            return checkInforEventRegisted ? checkInforEventRegisted?.session_ids : [];
        });
    }, [checkInforEventRegisted])

    useEffect(() => {
        let sessions = [];
        if (inforEvent) {
            inforEvent.channels.forEach((channel) => {
                channel.rooms.forEach((room) => {
                    sessions = [...sessions, ...room.sessions];
                })
            })
        }
        setSessionOfEvent(sessions);
    }, [inforEvent])

    const updateSessionsRegisted = useCallback((data) => {
        setSessionRegisted((prev) => [...prev, data]);
    }, [])

    function showFormRegistrationEvent() {
        if (!currentUser) {
            navigate('/login');
            return;
        }
        formRegisterRef.current.onShow();
    }

    return (
        <div className='detail_event'>
            <div className='event_title'>
                <h2 className='event-name'>{inforEvent?.name}</h2>
                <button className='btn btn-primary btn-regis_event'
                    onClick={showFormRegistrationEvent}
                >
                    Đăng ký sự kiện này
                </button>
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
                        inforEvent?.channels.map((channel) => <Channel data={channel} key={channel.id} sessionRegisted={sessionRegisted} />)
                        :
                        <h4 className='event_messae'>Sự kiện không có kênh nào!</h4>
                    }
                </div>
            </div>
            <FormRegistrationEvent ref={formRegisterRef}
                nameEvent={inforEvent?.name}
                tickets={inforEvent?.tickets}
                sessions={sessionsOfEvent}
                updateSessionsRegisted={updateSessionsRegisted}
            />
        </div>
    );
}

export default DetailEventPage;