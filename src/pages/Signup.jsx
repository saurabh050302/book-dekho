import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth();
    const handleSignup = () => {
        // console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result.user.email))
            .catch(err => console.log(err))
    }

    return (
        <div className='container h-screen m-auto p-10 flex flex-col gap-4 justify-center items-center '>
            <input
                type="email"
                name='email'
                placeholder='Email'
                onChange={e => setEmail(e.target.value)}
                value={email}
                className=' px-2 py-1 outline-none text-black rounded-sm' />
            <input
                type="password"
                name='password'
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
                value={password}
                className=' px-2 py-1 outline-none text-black rounded-sm' />
            <button onClick={handleSignup} className=' px-2 py-1 bg-blue-700 hover:bg-blue-500 rounded-md'>Sign Up</button>
            <span className='text-xs'>already have an account?</span>
            <Link to={"/signin"} className=' -my-4 text-sm text-blue-600'>click here to sign in</Link>
        </div>
    )
}

export default Signup