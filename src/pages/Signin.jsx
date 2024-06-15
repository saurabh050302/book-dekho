import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// firebase
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth();
    const handleSignin = () => {
        // console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
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
            <button onClick={handleSignin} className=' px-2 py-1 bg-blue-700 hover:bg-blue-500 rounded-md'>Sign In</button>
            <span className='text-xs'>create an account?</span>
            <Link to={"/signup"} className=' -my-4 text-sm text-blue-600'>click here to sign up</Link>
        </div>
    )
}

export default Signin