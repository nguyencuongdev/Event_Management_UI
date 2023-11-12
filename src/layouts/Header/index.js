import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { StoreContext } from '../../store';
import { clearInforUser, clearRegistedEvent } from '../../store/actions';
import './Header.css';

function Header() {
    const [state, dispatch] = useContext(StoreContext);
    const navigate = useNavigate();

    function redirectLoginPage() {
        navigate('/login');
    }

    async function handleLogout() {
        const res = await fetch('http://localhost:8000/XX_NguyenManhCuong/api/v1/logout?token=' +
            state.currentUser?.token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: state.currentUser?.username })
        })
        const data = await res.json();
        if (data?.message === 'Đăng xuất thành công') {
            dispatch(clearInforUser());
            dispatch(clearRegistedEvent());
            navigate('/login');
        } else {
            alert('Thao tác của bạn hiện không thể thực hiện!');
        }
    }

    return (
        <header className='header fixed-top shadow'>
            <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0">
                <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">
                    Nền tảng sự kiện
                </Link>
                <div className='nav-action'>
                    <span className="navbar-organizer">
                        {state.currentUser ? state.currentUser?.firstname + ' ' +
                            state.currentUser?.lastname : ''}
                    </span>
                    {state.currentUser ?
                        <button className="nav_btn btn-logout" onClick={handleLogout}>Đăng xuất</button>
                        :
                        <button className="nav_btn btn-login" onClick={redirectLoginPage}>
                            Đăng Nhập
                        </button>
                    }
                </div>
            </nav>
        </header>
    );
}

export default Header;