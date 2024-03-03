import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignIn from '../../hooks/useSignIn';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loading, signIn } = useSignIn()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signIn({ email, password })
    }
    return (
        <div className={`flex flex-col justify-center items-center bg-white mx-auto rounded min-w-96`}>
            <div className='bg-clip-padding bg-gray-400 bg-opacity-0 shadow-md backdrop-blur-lg backdrop-filter p-6 rounded-lg w-full'>
                <h1 className='font-semibold text-3xl text-center text-gray-700'>
                    <span className='text-blue-500'>Message-App</span>
                </h1>

                <form onSubmit={handleSubmit} >
                    <div>
                        <label className='p-2 label'>
                            <span className='text-base label-text'>Email</span>
                        </label>
                        <input
                            type='email'
                            placeholder='Enter username'
                            className='bg-gray-200 input-bordered w-full h-10 text-gray-600 input'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete='email'
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='bg-gray-200 input-bordered w-full h-10 text-gray-600 input'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete='current-password'
                        />
                    </div>
                    <Link to='/signup' className='inline-block mt-2 text-sm hover:text-blue-600 hover:underline'>
                        {"Don't"} have an account?
                    </Link>

                    <div>
                        <button className='btn-block mt-2 text-gray-50 btn btn-sm' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn