import { useState } from "react";
import { toast } from "react-toastify";


const useSignUp = () => {
    const [loading, setLoading] = useState(false)
    const signUp = async ({ email, name, password, conPassword }) => {
        const success = handleInputErrors({ email, name, password, conPassword });
        if (!success) return

        setLoading(true)
        try {
            const res = await fetch('http://localhost:3000/api/v1/auth/signup', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, name, password, conPassword })
            })
            const data = await res.json()
            if (!data.ok) {
                toast.warning(data.message)
            }
            toast.success(data.message)


        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false)
        }

    }

    return { loading, signUp }
}

function handleInputErrors({ email, name, password, conPassword }) {
    if (!email || !name || !password || !conPassword) {
        toast.error("Please fill in all fields");
        return false;
    }

    if (password !== conPassword) {
        toast.error("Passwords do not match");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }

    return true;
}

export default useSignUp