import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp';

const Signup = () => {
    const [inputs, setInputs] = useState({
        email: "",
        name: "",
        password: "",
        conPassword: "",
    });
    const { loading, signUp } = useSignUp()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signUp(inputs)
    }


    return (
        <div className='flex flex-col justify-center items-center bg-white mx-auto min-w-96'>
            <div className='bg-clip-padding bg-gray-400 bg-opacity-0 shadow-md backdrop-blur-lg backdrop-filter p-6 rounded-lg w-full'>
                <h1 className='font-semibold text-3xl text-center text-gray-300'>
                    <span className='text-blue-500'>Message-App</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='p-2 label'>
                            <span className='text-base label-text'>Email</span>
                        </label>
                        <input
                            type='email'
                            placeholder='John Doe'
                            className='bg-gray-200 input-bordered w-full h-10 text-gray-600 input'
                            value={inputs.email}
                            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='p-2 label'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='johndoe'
                            className='bg-gray-200 input-bordered w-full h-10 text-gray-600 input'
                            value={inputs.name}
                            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                            autoComplete='username'
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
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                            autoComplete='new-password'
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            className='bg-gray-200 input-bordered w-full h-10 text-gray-600 input'
                            value={inputs.conPassword}
                            onChange={(e) => setInputs({ ...inputs, conPassword: e.target.value })}
                            autoComplete='new-password'
                        />
                    </div>

                    <Link
                        to={"/signin"}
                        className='inline-block mt-2 text-sm hover:text-blue-600 hover:underline'
                        href='#'
                    >
                        Already have an account?
                    </Link>

                    <div>
                        <button className='btn-block border-slate-700 mt-2 border btn btn-sm' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup