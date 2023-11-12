export const loginService = async (userName, registrationCode) => {
    try {
        const res = await fetch(process.env.REACT_APP_BASE_URL_API +
            process.env.REACT_APP_API_URL_LOGIN, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: userName,
                registration_code: registrationCode
            })
        })
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const logoutService = async (token) => {
    try {
        const res = await fetch(process.env.REACT_APP_BASE_URL_API +
            process.env.REACT_APP_API_URL_LOGOUT + token,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const getRegistedEventService = async (token) => {
    try {
        const res2 = await fetch(process.env.REACT_APP_BASE_URL_API +
            process.env.REACT_APP_API_URL_REGISTEDEVENTS + token)
        const registed_list = await res2.json();
        return registed_list;
    } catch (err) {
        console.log(err);
    }
}

export const getInforDetailEventService = async (organizerSlug, eventSlug) => {
    try {
        const res = await fetch('http://localhost:8000/XX_NguyenManhCuong/api/v1/organizers/' + organizerSlug + '/events/' + eventSlug);
        const data = await res.json();
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

export const getEventsService = async () => {
    try {
        const res = await fetch(process.env.REACT_APP_BASE_URL_API +
            process.env.REACT_APP_API_URL_EVENTS);
        const data = await res.json();
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

export const regisEventService = async (organizerSlug, eventSlug, token, inforRegis) => {
    try {
        const api_url = 'http://localhost:8000/XX_NguyenManhCuong/api/v1/organizer/' +
            organizerSlug + '/events/' + eventSlug + '/registration?token=' + token;
        const res = await fetch(api_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ticket_id: inforRegis.ticketId,
                session_ids: inforRegis.sessionIds
            })
        })
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
} 