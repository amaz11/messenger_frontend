import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthUser'
import { Navigate } from 'react-router-dom'

const OnAuthUser = ({ children }) => {
    const { user, token } = useContext(AuthContext)
    if (token && token.length > 10) {
        return <Navigate to='/' replace />
    }
    return children
}

export default OnAuthUser