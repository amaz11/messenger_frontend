import { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthUser';

const useMessage = () => {
    const [loading, setLoading] = useState(false)
    const [sendloading, setSendloading] = useState(false)

    const { token, messages, setMessages } = useContext(AuthContext)

    const getMessages = async (receiverId) => {
        setMessages([])
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:3000/api/v1/message/${receiverId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await res.json()
            // console.log(data.data.message);
            if (data.data === null) {
                setMessages([])
            }
            setMessages(data?.data?.message)

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false)
        }
    }

    const sendMessage = async (message, receiverId) => {
        const success = handleInputErrors(message);
        if (!success) return
        setSendloading(true)
        try {
            const res = await fetch(`http://localhost:3000/api/v1/message/send/${receiverId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ message })
            })
            // const data = 
            await res.json()
            // if (data.ok) {
            //     getMessages(receiverId)
            // }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setSendloading(false);
        }
    }

    return { messages, loading, getMessages, sendMessage, sendloading }
}

function handleInputErrors(message) {
    if (!message) {
        toast.error("Please fill in all fields");
        return false;
    }

    return true;
}
export default useMessage