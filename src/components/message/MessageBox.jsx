import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
const MessageBox = () => {
    const noChat = false
    return (

        <div className='flex flex-col justify-between p-4 md:min-w-[450px]'>
            {
                noChat ? <NoChatSelected /> : <>
                    {/* Header */}
                    <div className='bg-slate-200 mb-2 px-4 py-2'>
                        <span className='font-bold text-gray-700'>John doe</span>
                    </div>
                    <div className='flex flex-col-reverse h-full overflow-y-auto no-scrollbar'>
                        <Messages chatPosition='chat-start' />
                        <Messages chatPosition='chat-end' />
                    </div>
                    <MessageInput />
                </>

            }

        </div>
    )
}

export default MessageBox

const NoChatSelected = () => {
    // const { authUser } = useAuthContext();
    return (
        <div className='flex justify-center items-center w-full h-full'>
            <div className='flex flex-col items-center gap-2 px-4 font-semibold text-center text-gray-600 sm:text-lg md:text-xl'>
                <p>Welcome Amaz </p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl text-center md:text-6xl' />
            </div>
        </div>
    );
};