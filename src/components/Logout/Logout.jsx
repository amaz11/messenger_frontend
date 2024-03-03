import React, { useContext } from 'react'
import { BiLogOut } from "react-icons/bi";
import { AuthContext } from '../../context/AuthUser';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { setToken, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const logout = () => {
        localStorage.setItem("token", '')
        setToken('')
        localStorage.setItem("user", JSON.stringify({}))
        setUser({})
        navigate('/signin')
    }
    return (
        <div className='bottom-0 left-0 fixed bg-white mt-auto p-4 border-r min-w-80'>
            <BiLogOut className='w-6 h-6 text-gray-600 cursor-pointer' onClick={logout} />
        </div>
    )
}

export default Logout