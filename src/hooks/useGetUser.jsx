import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthUser'
import { toast } from 'react-toastify'

const useGetUser = () => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
    const { token } = useContext(AuthContext)
    const getUser = async () => {
        setLoading(true)
        try {
            const res = await fetch('http://localhost:3000/api/v1/users/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await res.json()
            setUser(data.data)
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return { user, loading }
}

export default useGetUser