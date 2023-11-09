import Header from '../Header';
import Sidebar from '../Sidebar';
import './DefaultLayout.css';

function DefaultLayout({ children }) {
    return (
        <div className='wrapper'>
            <Header />
            <main className='main'>
                <Sidebar />
                <div className='content'>
                    {children}
                </div>
            </main >
        </div >
    );
}

export default DefaultLayout;