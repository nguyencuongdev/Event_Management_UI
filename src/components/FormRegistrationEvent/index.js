import './RegistrationEvent.css';
import {
    useState, useRef, useImperativeHandle,
    memo, forwardRef, useEffect, useContext
} from 'react';
import { actions, StoreContext } from '../../store';
import { useParams, useLocation } from 'react-router-dom';

const FormRegistrationEvent = forwardRef(({ nameEvent, tickets, sessions, updateSessionsRegisted }, ref) => {

    const btnPurchaseRef = useRef(null);
    const formRegisterRef = useRef(null);

    const [state, dispatch] = useContext(StoreContext);
    const currentUser = state.currentUser;
    const { event_slug } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const organizer_slug = searchParams.get('og');

    const [typeTicket, setTypeTicket] = useState(null);
    const [costEvent, setCostEvent] = useState(0);
    const [sessionIds, setSessionIds] = useState([]);
    const [costAddSession, setCostAddSession] = useState(0);
    const [totalMoney, setTotalMoney] = useState(0);

    useEffect(() => {
        let idOfSessionsTypeTalk = [];
        sessions.forEach((session) => {
            if (session.type === 'talk') {
                idOfSessionsTypeTalk.push(session.id);
            }
        })
        setSessionIds(idOfSessionsTypeTalk);
    }, [sessions]);

    useImperativeHandle(ref, () => {
        return {
            onShow: () => formRegisterRef.current.style.display = 'flex',
            onClose: () => formRegisterRef.current.style.display = 'none'
        }
    })

    function handleChoiceTicket(e) {
        const element = e.target;
        let eParrent = element.parentElement;
        while (!eParrent.classList.contains('ticket')) {
            eParrent = eParrent.parentElement;
        }
        const id = eParrent.getAttribute('data-id');
        const cost = +(eParrent.querySelector('.ticket-cost').innerText);
        if (!element.checked) {
            setTypeTicket(null);
            btnPurchaseRef.current.classList.add('disabled');
            setTotalMoney(costAddSession);
            setCostEvent(0);
            return;
        }
        setTypeTicket({
            id: +id,
            cost,
        })
        setCostEvent(cost);
        setTotalMoney(cost + costAddSession);
        btnPurchaseRef.current.classList.remove('disabled');
    }
    async function handleRegistrationEvent(e) {
        e.preventDefault();
        if (currentUser && typeTicket) {
            const api_url = 'http://localhost:8000/XX_NguyenManhCuong/api/v1/organizer/' +
                organizer_slug + '/events/' + event_slug +
                '/registration?token=' + currentUser.token;
            const res = await fetch(api_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ticket_id: typeTicket.id,
                    session_ids: sessionIds
                })
            })
            const data = await res.json();
            alert(data.message);
            if (data.message === 'Đăng ký thành công') {
                dispatch(actions.addRegistedEvent({
                    name: nameEvent,
                    session_ids: sessionIds
                }))
                updateSessionsRegisted(sessionIds);
                setTypeTicket(null);
                setCostEvent(0);
                setCostAddSession(0);
                setTotalMoney(0);
                setSessionIds(() => {
                    let idOfSessionsTypeTalk = [];
                    sessions.forEach((session) => {
                        if (session.type === 'talk')
                            idOfSessionsTypeTalk.push(session.id);
                    })
                    return idOfSessionsTypeTalk;
                })
                closeFormRegister();
            }
        }
    }

    function handeAddSessionWorkshop(e) {
        const element = e.target;
        let eParrent = element.parentElement;
        while (!eParrent.classList.contains('workshop')) {
            eParrent = eParrent.parentElement;
        }
        const idSession = +(eParrent.getAttribute('data-id'));
        const costSession = +(eParrent.getAttribute('data-cost'));
        if (!element.checked) {
            setSessionIds((prev) => prev.filter((id) => id !== idSession));
            setCostAddSession((prev) => prev - costSession);
            setTotalMoney((prev) => prev - costSession);
            return;
        }
        setSessionIds((prev) => [...prev, idSession]);
        setCostAddSession((prev) => prev + costSession);
        setTotalMoney((prev) => prev + costSession);
    }

    function closeFormRegister() {
        formRegisterRef.current.style.display = 'none';
    }
    return (
        <div className="register-event" ref={formRegisterRef}>
            <div className='overlay' onClick={closeFormRegister}></div>
            <form action="" className="form_register" onSubmit={handleRegistrationEvent}>
                <h2 className="form_register-eventName">{nameEvent}</h2>
                <div className="event-tickets">
                    {tickets?.length > 0 && tickets.map((ticket) => {
                        return (
                            <div className="ticket" data-id={ticket.id} key={ticket.id}>
                                <input type="checkbox" className="ticket-type"
                                    onChange={handleChoiceTicket}
                                    checked={typeTicket?.id === ticket.id}
                                />
                                <div className="ticket-group">
                                    <h4 className="ticket-name">{ticket.name}</h4>
                                    <span className="ticket-specialValidity">
                                        {ticket.specialValidity}
                                    </span>
                                </div>
                                <span className="ticket-cost">{ticket.cost}</span>
                            </div>
                        )
                    })}
                </div>
                <div className="event-sesions">
                    <div className="event-sessions-workshop">
                        <h3 className="event-session-type">Lựa chọn thêm các workshop bạn muốn đặt: </h3>
                        <div className="event-session-list">
                            {sessions.length > 0 &&
                                sessions.map((session) => {
                                    if (session.type !== 'workshop') return '';
                                    return (
                                        <div className="workshop" key={session.id}
                                            data-id={session.id}
                                            data-cost={session.cost}
                                        >
                                            <input type="checkbox" className="session-select"
                                                onChange={handeAddSessionWorkshop}
                                            />
                                            <h4 className="session-title">{session.title}</h4>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </div>
                <div className="pay">
                    <div className='pay-container'>
                        <div className="pay-group">
                            <span className='pay-title'>Vé sự kiện</span>
                            <span className="pay-cost" id="event-cost">{costEvent}</span>
                        </div>
                        <div className="pay-group">
                            <span className='pay-title'>Workshop bổ sung</span>
                            <span className="pay-cost" id="additional-cost">{costAddSession}</span>
                        </div>
                        <div className="pay-group">
                            <span className='pay-title'>Tổng</span>
                            <span className="pay-cost" id="total-cost">{totalMoney}</span>
                        </div>
                        <button id="purchase" className='btn btn-pay disabled'
                            ref={btnPurchaseRef}
                        >
                            Mua
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
})

export default memo(FormRegistrationEvent);