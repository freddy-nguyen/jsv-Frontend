import './Login.scss'
const Login = (props) => {
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
                        <input type='text' class="form-control" placeholder='Email or phone number'></input>
                        <input type='password' class="form-control" placeholder='Password'></input>
                        <button className='btn btn-primary'>Login</button>
                        <span className='text-center'><a className='forgot-password' href='#'>Forgot password?</a></span>
                        <hr />
                        <div className="text-center">
                            <button className='btn btn-success'>Create new account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login;