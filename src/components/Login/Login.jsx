import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false)
    const {signInUser} = useContext(authContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from  = location.state?.from?.pathname || '/'
    // console.log(location);
    const handleLogIn =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email,password)
        .then(result=>{
            const loggedInUser = result.user;
            form.reset()
            navigate(from)
            // console.log(loggedInUser);
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div className='form-container'>
        <h2 className='form-title'> Login</h2>
        <form onSubmit={handleLogIn}>
            <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"  required/>
            </div>
            <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type={show ? 'text' : 'password'} name="password"  required/>
                <p onClick={()=> setShow(!show)}>
                    {show ? <span>hide Password</span> : <span>show Password</span>}
                </p>
            </div>
            <button className='btn-submit'>Login</button>
            <p className='toggle-sing-log'>New to Ema-jhon ? <Link to='/signup'>Create a new account</Link></p>
        </form>
    </div>
    );
};

export default Login;