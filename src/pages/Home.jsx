import { useMutation, useQuery } from '@tanstack/react-query';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'

const Home = () => {

    const auth = getAuth();
    const [authUser, setAuthUser] = useState({});

    const { mutate: handleAuthStateChange, isPending, isError, error } = useMutation({
        mutationFn: () => {
            onAuthStateChanged(auth, (user) => {
                if (user) setAuthUser(user);
                else setAuthUser(null);
            })
        },
        onSuccess: () => { console.log("mutatuon success") },
        onError: () => { console.log("mutatuon fail") }
    })

    useEffect(() => {
        handleAuthStateChange();
    }, [auth])

    const handleSignout = () => {
        signOut(auth)
            .then(() => console.log("Logged Out"))
            .catch(err => console.log(err))
    }

    return (
        <div className='container h-screen m-auto p-10 flex gap-4 justify-center items-center '>
            {isPending && <div>pendigng</div>}
            {isError && <div>{error.message}</div>}

            {!isPending &&
                <div className=' text-center'>
                    <p> Hello {authUser.email} </p>
                    <button onClick={handleSignout} className=' px-2 py-1 bg-blue-700 hover:bg-blue-500 rounded-md'>Sign Out</button>
                </div>
            }
        </div>
    )
}

export default Home