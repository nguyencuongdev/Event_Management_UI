import { useEffect, useState } from 'react';
import { Event } from '../../components';
import './HomePage.css';


function HomePage() {
    const [events, setEvents] = useState([]);

    //call api để lấy các sự kiện sắp tới;
    useEffect(() => {
        async function getEvents() {
            try {
                const res = await fetch('http://localhost:8000/XX_NguyenManhCuong/api/v1/events');
                const data = await res.json();
                setEvents(data.events);
            }
            catch (error) {
                console.log(error);
            }
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