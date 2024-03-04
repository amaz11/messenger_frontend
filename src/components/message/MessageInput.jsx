import React, { useState } from 'react'
import { BsSend } from "react-icons/bs";
import useMessage from '../../hooks/useMessage';
const MessageInput = ({ receiverId }) => {
    const [message, setMessage] = useState("");
    const { sendMessage } = useMessage()
    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendMessage(message, receiverId);
        setMessage("");
    };
    return (
        <form className='my-3' onSubmit={handleSubmit}>
            <div className='relative w-full'>
                <input
                    type='text'
                    className='block border-gray-300 bg-gray-200 p-2.5 border rounded-lg w-full text-gray-600 text-sm'
                    placeholder='Send a message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type='submit' className='absolute inset-y-0 flex items-center end-0 pe-3'>
                    <BsSend />
                </button>
            </div>
        </form>
    )
}

export default MessageInput