import { useEffect, useState } from 'react';
import { Event } from '../../components';
import { getEventsService } from '../../services';
import './HomePage.css';


function HomePage() {
    const [events, setEvents] = useState([]);

    //call api để lấy các sự kiện sắp tới;
    useEffect(() => {
        const getEvents = async () => {
            const data = await getEventsService();
            setEvents(data.events);
        }
        getEvents();
    }, [])

    return (
        <div className='home'>
            <Event events={events} />
        </div>
    );
}

export default HomePage;