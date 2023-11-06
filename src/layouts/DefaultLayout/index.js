import './DefaultLayout.css';

function DefaultLayout({ children }) {
    return (
        <div className='wrapper'>
            <header className='header'>
                <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="events/index.html"
                    >Nền tảng sự kiện</a>
                    <span class="navbar-organizer w-100">Tên người tham gia</span>
                    <ul class="navbar-nav px-3">
                        <li class="nav-item text-nowrap">
                            <a class="nav-link" id="logout" href="index.html">Đăng xuất</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className='main container-fluid'>
                <div className='sidebar col-lg4'>
                    This is a sidebar
                </div>
                <div className='content col-lg-8'>
                    {children}
                </div>
            </main>
        </div>
    );
}

export default DefaultLayout;