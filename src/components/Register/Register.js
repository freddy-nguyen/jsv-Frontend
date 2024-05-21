import './Register.scss'
import { useHistory } from "react-router-dom";

const Register = (props) => {
    let history = useHistory();
    const handleLogin = () => {
        history.push('/login');
    }
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
                            {/* <label>EMAIL</label> */}
                            <input type='text' class="form-control" placeholder='Email address'></input>
                        </div>

                        <div className='form-group'>
                            {/* <label>PHONE NUMBER</label> */}
                            <input type='text' class="form-control" placeholder='Phone Number'></input>
                        </div>

                        <div className='form-group'>
                            {/* <label>USERNAME</label> */}
                            <input type='text' class="form-control" placeholder='Username'></input>
                        </div>

                        <div className='form-group'>
                            {/* <label>PASSWORD</label> */}
                            <input type='password' class="form-control" placeholder='New Password'></input>
                        </div>
                        <div className='form-group'>
                            {/* <label>PASSWORD</label> */}
                            <input type='password' class="form-control" placeholder='Retype New Password'></input>
                        </div>
                        <button className='btn btn-primary'>Register</button>
                        <hr />
                        <div className="text-center">
                            <button className='btn btn-success' onClick={() => handleLogin()}>Already have an account? Login.</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default Register;