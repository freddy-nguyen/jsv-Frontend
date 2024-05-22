import './Register.scss';
import { useHistory } from "react-router-dom";
import axios from 'axios'; //react axios
import { useEffect, useState } from 'react'; //react
import { toast } from 'react-toastify';

const Register = (props) => {

    // react
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    //if invalid, red; if valid, green/no color -> make it look good
    const defaultValidInput = {
        isValidEmail: true,
        isValidUsername: true,
        isValidPhone: true,
        isValidPassword: true,
        isValidConfirmPassword: true,
        isLongPassword: true,
    }
    const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);
    //  

    let history = useHistory();
    const handleLogin = () => {
        history.push('/login');
    }

    //use this instead of html required because required is html is public and could be removed by users
    const isValidInputs = (email, phone, username, password, confirmPassword) => {
        setObjCheckInput(defaultValidInput);
        if (!email) {
            toast.error("Email is required!");
            setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
            // the 3 dot is to quote current elems of default array and replace the isValidEmail with this one
            return false;
        }
        let regx = /\S+@\S+\.\S+/; //regex for email to check email format
        if (!regx.test(email)) {
            toast.error("Please enter a valid email address");
            setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
            return false;
        }
        if (!phone) {
            toast.error("Phone is required!");
            setObjCheckInput({ ...defaultValidInput, isValidPhone: false });
            return false;
        }
        if (!username) {
            toast.error("Username is required!");
            setObjCheckInput({ ...defaultValidInput, isValidUsername: false });
            return false;
        }
        if (!password) {
            toast.error("Password can't be empty!");
            setObjCheckInput({ ...defaultValidInput, isValidPassword: false });
            return false;
        }
        if (password.length < 4) {
            toast.error("Password can't have less than 4 letters");
            setObjCheckInput({ ...defaultValidInput, isLongPassword: false });
            return false;
        }
        if (password != confirmPassword) {
            toast.error("Your password and confirmation password do not match.");
            setObjCheckInput({ ...defaultValidInput, isValidConfirmPassword: false });
            return false;
        }
        return true;
    }

    const handleRegister = () => {
        let userData = {
            'email': email,
            'phone': phone,
            'username': username,
            'password': password,
            'confirmPassword': confirmPassword,
        };
        if (isValidInputs(email, phone, username, password, confirmPassword)) {
            toast.success("Registered successfully!");
            axios.post('http://localhost:8082/api/v1/register', { email, phone, username, password })
        }
        console.log(userData);
    }

    // react check backend and frontend send data ok or not
    useEffect(() => {
        //has to use api/v1/test-api because we used api/v1 for api.js initApiRoutes (return app.use("/api/v1", router);) in backend
        // axios.get('http://localhost:8082/api/v1/test-api').then(data => {
        //     console.log(">>>>check data", data);
        // })
        // axios.post('http://localhost:8082/api/v1/register', { username: 'kingdao', email: 'cogidai', phone: '', password: '.', confirmPassword: '.' })
    }, []);
    //

    return (
        <div className='register-container py-3'>
            <div className='container'>
                <div className='row px-3'>
                    <div className='content-left col-12 col-md-5 d-md-block d-none'>
                        <div className='brand'>Sign Up</div>
                        <div className='detail'>It's quick and easy. <br></br>Free and always will be.</div>
                    </div>
                    <div className='content-right col-md-7 col-12 d-flex flex-column gap-3 py-3'>
                        <div className='brand d-md-none'>Sign Up</div>

                        <div className='form-group'>
                            <input type='text' className={objCheckInput.isValidEmail ? "form-control" : "form-control is-invalid"} placeholder='Email address'
                                //react
                                value={email} onChange={(event) => setEmail(event.target.value)}></input>
                        </div>

                        <div className='form-group'>
                            <input type='text' className={objCheckInput.isValidPhone ? "form-control" : "form-control is-invalid"} placeholder='Phone Number'
                                value={phone} onChange={(event) => setPhone(event.target.value)}></input>
                        </div>

                        <div className='form-group'>
                            <input type='text' className={objCheckInput.isValidUsername ? "form-control" : "form-control is-invalid"} placeholder='Username'
                                value={username} onChange={(event) => setUsername(event.target.value)}></input>
                        </div>

                        <div className='form-group'>
                            <input type='password' className={objCheckInput.isValidPassword ? "form-control" : "form-control is-invalid"} placeholder='New Password'
                                value={password} onChange={(event) => setPassword(event.target.value)}></input>
                        </div>
                        <div className='form-group'>
                            <input type='password' className={objCheckInput.isValidConfirmPassword ? "form-control" : "form-control is-invalid"} placeholder='Retype New Password'
                                value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}></input>
                        </div>
                        <button className='btn btn-primary' onClick={() => handleRegister()}>Register</button>
                        <hr />
                        <div className="text-center">
                            <button className='btn btn-success' onClick={() => handleLogin()}>Already have an account? Login.</button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}


export default Register;