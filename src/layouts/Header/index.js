import './Header.css';
// eslint-disable-next-line no-unused-vars
import { useState, useContext } from 'react';
// import currentUser from '../../Context/currentUser';

function Header() {
    // eslint-disable-next-line no-unused-vars
    const [currentUser, setCurrentUser] = useState('Cdev');
    return (
        <header className='header fixed-top shadow'>
            <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">
                    Nền tảng sự kiện
                </a>
                <div className='nav-action'>
                    <span className="navbar-organizer">{currentUser}</span>
                    {currentUser ?
                        <button className="nav_btn btn-logout">Đăng xuất</button>
                        :
                        <button className="nav_btn btn-login">Đăng Nhập</button>
                    }
                </div>
            </nav>
        </header>
    );
}

export default Header;