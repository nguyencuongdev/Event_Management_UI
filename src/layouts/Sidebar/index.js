import './Sidebar.css';

function Sidebar() {
    return (
        <nav className="d-md-block sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active pl-0" href="/">Danh sách sự kiện</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar;