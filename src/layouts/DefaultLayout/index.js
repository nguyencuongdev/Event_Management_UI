import Header from '../Header';
import Sidebar from '../Sidebar';
import './DefaultLayout.css';

function DefaultLayout({ children }) {
    return (
        <div className='wrapper'>
            <Header />
            <main className='container-fluid main'>
                <div className='row'>
                    <div className='col-lg-2 bg-light'>
                        <Sidebar />
                    </div>
                    <div className='content col-lg-10'>
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default DefaultLayout;