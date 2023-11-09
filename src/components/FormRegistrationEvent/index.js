import './RegistrationEvent.css';

function FormRegistrationEvent() {
    return (
        <div className="register-event">
            <div className='overlay'></div>
            <form action="" className="form_register">
                <h2 className="form_register-eventName">Hội thảo kỹ năng nghề TP Hà Nội 2023</h2>
                <div className="event-tickets">
                    <div className="ticket">
                        <input type="checkbox" className="ticket-type" />
                        <div className="ticket-group">
                            <h4 className="ticket-name">Vé thường</h4>
                            <span className="ticket-specialValidity">--</span>
                        </div>
                        <span className="ticket-cost">210</span>
                    </div>
                    <div className="ticket">
                        <input type="checkbox" className="ticket-type" />
                        <div className="ticket-group">
                            <h4 className="ticket-name">Đặt sớm</h4>
                            <span className="ticket-specialValidity">Không có sẵn</span>
                        </div>
                        <span className="ticket-cost">110</span>
                    </div>
                    <div className="ticket">
                        <input type="checkbox" className="ticket-type" />
                        <div className="ticket-group">
                            <h4 className="ticket-name">Vip</h4>
                            <span className="ticket-specialValidity">50 vé sẵn có</span>
                        </div>
                        <span className="ticket-cost">300</span>
                    </div>
                </div>
                <div className="event-sesions">
                    <div className="event-sessions-talk">
                        <div className="event-session-list">
                            <div className="talk">
                                <input type="checkbox" className="session-select" />
                                <h4 className="session-title">Phiên 1</h4>
                            </div>
                            <div className="talk">
                                <input type="checkbox" className="session-select" />
                                <h4 className="session-title">Phiên 2</h4>
                            </div>
                            <div className="talk">
                                <input type="checkbox" className="session-select" />
                                <h4 className="session-title">Phiên 3</h4>
                            </div>
                        </div>
                    </div>
                    <div className="event-sessions-workshop">
                        <h3 className="event-session-type">Lựa chọn thêm các workshop bạn muốn đặt: </h3>
                        <div className="event-session-list">
                            <div className="workshop">
                                <input type="checkbox" className="session-select" />
                                <h4 className="session-title">Phiên 4</h4>
                            </div>
                            <div className="workshop">
                                <input type="checkbox" className="session-select" />
                                <h4 className="session-title">Phiên 5</h4>
                            </div>
                            <div className="workshop">
                                <input type="checkbox" className="session-select" />
                                <h4 className="session-title">Phiên 6</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pay">
                    <div className='pay-container'>
                        <div className="pay-group">
                            <span className='pay-title'>Vé sự kiện</span>
                            <span className="pay-cost" id="event-cost">210</span>
                        </div>
                        <div className="pay-group">
                            <span className='pay-title'>Workshop bổ sung</span>
                            <span className="pay-cost" id="additional-cost">210</span>
                        </div>
                        <div className="pay-group">
                            <span className='pay-title'>Tổng</span>
                            <span className="pay-cost" id="total-cost">210</span>
                        </div>
                        <button id="purchase" className='btn btn-primary btn-pay'>Mua</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormRegistrationEvent;