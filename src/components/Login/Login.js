import './Login.scss'
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from '../../services/userService';

const Login = (props) => {
    let history = useHistory();
    const [valueLogin, setValueLogin] = useState("");
    const [password, setPassword] = useState("");
    const defaultObjValidInput = {
        isValidValueLogin: true,
        isValidPassword: true,
    };
    const [objValidInput, setObjValieInput] = useState(defaultObjValidInput);

    const handleCreateNewAccount = () => {
        history.push('/register');
    }
    const handleLogin = async () => {
        setObjValieInput(defaultObjValidInput);
        if (!valueLogin) {
            setObjValieInput({ ...defaultObjValidInput, isValidValueLogin: false });
            toast.error('Please enter your email address or phone number.');
            return;
        }
        if (!password) {
            setObjValieInput({ ...defaultObjValidInput, isValidPassword: false });
            toast.error('Please enter your password.');
            return;
        }
        let loginStatus = await loginUser(valueLogin, password);
        if (loginStatus.data.EC == 0) {
            toast.success(loginStatus.data.EM);
        }
        else {
            toast.error(loginStatus.data.EM);
        }
    }

    return (
        <div className='login-container py-3'>
            <div className='container'>
                <div className='row px-3'>
                    <div className='content-left col-12 col-md-7 d-md-block d-none'>
                        <div className='brand'>vibeverse</div>
                        <div className='detail'>VibeVerse helps you connect and share with people in your life.</div>
                    </div>
                    <div className='content-right col-md-5 col-12 d-flex flex-column gap-3 py-3'>
                        <div className='brand d-md-none'>vibeverse</div>
                        <input
                            type='text'
                            className={objValidInput.isValidValueLogin ? "form-control" : "form-control is-invalid"}
                            placeholder='Email or phone number'
                            value={valueLogin}
                            onChange={(event) => { setValueLogin(event.target.value) }}>
                        </input>
                        <input
                            type='password'
                            className={objValidInput.isValidPassword ? "form-control" : 'form-control is-invalid'}
                            placeholder='Password'
                            value={password}
                            onChange={(event) => { setPassword(event.target.value) }}>
                        </input>
                        <button className='btn btn-primary' onClick={() => handleLogin()}>Login</button>
                        <span className='text-center'><a className='forgot-password' href='#'>Forgot password?</a></span>
                        <hr />
                        <div className="text-center">
                            <button className='btn btn-success' onClick={() => handleCreateNewAccount()}>Create new account</button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Login;