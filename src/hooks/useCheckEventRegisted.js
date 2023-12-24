import { useState, useEffect } from 'react';

function useCheckEventRegisted(event_slug, registedEvents, currentUser) {
    const [inforEventRegisted, setInforEventRegisted] = useState(null);
    useEffect(() => {
        if (currentUser) {
            //Vì một sự kiện có thể đăng ký với nhiều loại vé khau cũng như mỗi lần đăng ký sư kiện các phiên có thể giống nhau hoặc kháu nhau;
            // Vậy nên ta cần lấy được thông tin của sự kiện của tất cả lần đăng ký cũng như lấy ra được tất cả các phiên đã đăng ký;
            const inforEvent = {
                id: '',
                name: '',
                slug: '',
                date: '',
                organizer: {
                    name: '',
                    slug: ''
                },
                session_ids: []
            };

            const inforEvents = registedEvents.filter((event) => event.slug === event_slug);
            inforEvents.forEach((event) => {
                inforEvent.id = event.id;
                inforEvent.name = event.name;
                inforEvent.slug = event.slug;
                inforEvent.date = event.date;
                inforEvent.organizer = event.organizer;
                inforEvent.session_ids = [...inforEvent.session_ids, ...event.session_ids];
            })
            setInforEventRegisted(inforEvent);
        }
    }, [event_slug, registedEvents, currentUser]);
    return inforEventRegisted;
}
export default useCheckEventRegisted;