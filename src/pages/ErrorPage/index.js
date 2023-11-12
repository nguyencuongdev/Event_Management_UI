import './ErrorPage.css';

function ErrorPage({ message = '404' }) {
    return (
        <div className="errorpage-container">
            <h1 className="errorpage-message">{message}</h1>
        </div>
    );
}

export default ErrorPage;