import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../store/Context';
import './Header.css';
import { clearInforUser } from '../../store/actions';

function Header() {
    const [state, dispatch] = useContext(Context);
    const navigate = useNavigate();

    function redirectLoginPage() {
        navigate('/login');
    }

    async function handleLogout() {
        const res = await fetch('http://localhost:8000/XX_NguyenManhCuong/api/v1/logout?token=' + state.currentUser?.token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: state.currentUser?.username })
        })
        const data = await res.json();
        if (data?.message === 'Đăng xuất thành công') {
            dispatch(clearInforUser());
            navigate('/login');
        } else {
            alert('Thao tác của bạn hiện không thể thực hiện!');
        }
    }


    return (
        <header className='header fixed-top shadow'>
            <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">
                    Nền tảng sự kiện
                </a>
                <div className='nav-action'>
                    <span className="navbar-organizer">{state.currentUser?.username ?? ''}</span>
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