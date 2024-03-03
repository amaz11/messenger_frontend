import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthUser'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const { user, token } = useContext(AuthContext)
    if (token.length < 10 || token === null) {
        return <Navigate to='/signin' replace />
    }
    return children
}

export default ProtectedRoute