import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { actions, StoreContext } from '../../store';
import { loginService, getRegistedEventService } from '../../services';

import './LoginPage.css';


function LoginPage() {
    const context = useContext(StoreContext);
    const dispatch = context[1];
    const navigate = useNavigate();

    const [userNameValue, setUserNameValue] = useState('');
    const [registrationCodeValue, setregistrationCodeValue] = useState('');
    const [checkUserName, setCheckUserName] = useState(false);
    const [checkRegistrationCode, setCheckRegistrationCode] = useState(false);

    const ErrorUserNameRef = useRef(null);
    const ErrorRegistraionCodeRef = useRef(null);
    const ErrorLogin = useRef(null);

    async function handleLogin(e) {
        e.preventDefault();
        if (!checkUserName)
            ErrorUserNameRef.current.innerText = 'Username không hợp lệ';
        if (!checkRegistrationCode)
            ErrorRegistraionCodeRef.current.innerText = 'Mã đăng ký không hợp lệ';

        if (checkRegistrationCode && checkUserName) {
            const data = await loginService(userNameValue, registrationCodeValue);
            if (data?.message) {
                ErrorLogin.current.innerText = 'Username hoặc mã đăng ký không chính xác';
                return;
            }
            const registed_list = await getRegistedEventService(data.token);
            dispatch(actions.setInforUser(data));
            dispatch(actions.storeRegistedEvent(registed_list));
            if (window.history.length > 1) {
                navigate(-1);
                return;
            }
            navigate('/');
        }
    }

    function handleValidateUsername(e) {
        let value = e.target.value;
        const regx = /^[a-zA-Z0-9_]+$/;
        if (!regx.test(value)) {
            ErrorUserNameRef.current.innerText = 'Username không hợp lệ';
            setCheckUserName(false);
            return;
        }
        setCheckUserName(true);
    }

    function handleValidateRegistrationCode(e) {
        let value = e.target.value;
        const regx = /^[a-zA-Z0-9]+$/;
        if (!regx.test(value)) {
            ErrorRegistraionCodeRef.current.innerText = 'Mã đăng ký không hợp lệ';
            setCheckRegistrationCode(false);
            return;
        }
        setCheckRegistrationCode(true);
    }

    function handleChangeUserName(e) {
        let value = e.target.value;
        (!value.trim()) ? setUserNameValue('') : setUserNameValue(value);
        ErrorUserNameRef.current.innerText = ' ';
        ErrorLogin.current.innerText = '';
    }

    function handleChangeRegistraionCode(e) {
        let value = e.target.value;
        (!value.trim()) ? setregistrationCodeValue('') : setregistrationCodeValue(value);
        ErrorRegistraionCodeRef.current.innerText = ' ';
        ErrorLogin.current.innerText = '';
    }

    return (
        <div className='login'>
            <form className='form-login' onSubmit={handleLogin} method="POST">
                <h2 className='login_title'>Đăng nhập</h2>
                <div className='form-group form-inline'>
                    <label className='form-label col-lg-4 px-0'>Username: </label>
                    <input className='form-control col-lg-8' id="username" name='username' autoComplete='off' type='text' placeholder='Username' value={userNameValue}
                        onChange={handleChangeUserName}
                        onBlur={handleValidateUsername}
                    />
                    <p className='message-error col-12 px-0' ref={ErrorUserNameRef}></p>
                </div>
                <div className='form-group form-inline'>
                    <label className='form-label col-lg-4 px-0'>Mã đăng ký: </label>
                    <input className='form-control col-lg-8' id="registration_code" name='registration_code' autoComplete='off' type='password'
                        value={registrationCodeValue} placeholder='Registration code'
                        onChange={handleChangeRegistraionCode}
                        onBlur={handleValidateRegistrationCode}
                    />
                    <p className='message-error col-12 px-0' ref={ErrorRegistraionCodeRef}></p>
                </div>
                <p className='message-error mb-3' ref={ErrorLogin}></p>
                <div className='form-group mb-0 d-flex justify-content-center'>
                    <button className='btn btn-primary' id='login'>Đăng nhập</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;