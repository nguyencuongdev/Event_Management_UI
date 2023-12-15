import { useState, useEffect } from 'react';

function useCheckEvent(currentUser, eventSlug, listRegistedEvent = []) {
    const [inforEvent, setInforEvent] = useState(null);

    useEffect(() => {
        if (!currentUser || !listRegistedEvent.length) {
            setInforEvent(null);
            return;
        }

        let check = false;
        const event = {
            'name': '',
            'slug': '',
            'date': '',
            'organizer': {},
            sessionIds: []
        };

        listRegistedEvent.forEach((item) => {
            if (item.event.slug === eventSlug) {
                check = true;
                event.name = item.event.name;
                event.slug = eventSlug;
                event.date = item.event.date;
                event.organizer = item.event.organizer;
                const listIdOfSessions = item.session_ids.map((session) => session.id);
                event.sessionIds = [...event.sessionIds, ...listIdOfSessions];
            }
        });

        (check) ? setInforEvent(event) : setInforEvent(null);
    }, [currentUser, eventSlug, listRegistedEvent]);

    return inforEvent;
}

export default useCheckEvent;