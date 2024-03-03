import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthUser";


const useSignIn = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { setUser, setToken } = useContext(AuthContext)
    const signIn = async ({ email, password }) => {
        const success = handleInputErrors({ email, password });
        if (!success) return

        setLoading(true)
        try {
            const res = await fetch('http://localhost:3000/api/v1/auth/signin', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            })
            const data = await res.json()
            if (!data.ok) {
                toast.warning(data.message)
            }
            toast.success(data.message)
            localStorage.setItem('token', data.token)
            setToken(data.token)
            localStorage.setItem('user', JSON.stringify(data.data))
            setUser(data.data)
            navigate('/')
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false)
        }

    }

    return { loading, signIn }
}

function handleInputErrors({ email, password }) {
    if (!email || !password) {
        toast.error("Please fill in all fields");
        return false;
    }

    return true;
}

export default useSignIn