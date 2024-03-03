import React from 'react'
import { BsSend } from "react-icons/bs";
const MessageInput = () => {
    return (
        <form className='my-3'>
            <div className='relative w-full'>
                <input
                    type='text'
                    className='block border-gray-600 bg-gray-700 p-2.5 border rounded-lg w-full text-sm text-white'
                    placeholder='Send a message'
                />
                <button type='submit' className='absolute inset-y-0 flex items-center end-0 pe-3'>
                    <BsSend />
                </button>
            </div>
        </form>
    )
}

export default MessageInput