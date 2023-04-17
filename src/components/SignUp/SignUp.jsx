import React, { useContext, useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';

const SignUp = () => {
    const [error, setError] =  useState('')
    const {createUser} = useContext(authContext);

    const handleSignUp = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password !== confirm){
            setError('password did not match!!');
            return 
        }
        if(password.length < 6){
            setError('password length must be 6 character')
        }

        createUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{

            setError(error.message)
        })
        // console.log(email,password,confirm);
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'> Sign up</h2>
            <form onSubmit={handleSignUp} >
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"  required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"  required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirm"  required/>
                </div>
                <button className='btn-submit'>Sign up</button>
                <p className='toggle-sing-log'>Already have an account ? <Link to='/login'>Log In</Link>
                    
                </p>
                <p className='error-msg'>{error}</p>
            </form>
        </div>
    );
};

export default SignUp;