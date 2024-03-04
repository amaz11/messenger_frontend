import React, { useContext } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import { AuthContext } from '../../context/AuthUser';
import useMessage from '../../hooks/useMessage';
import useListenMessage from '../../hooks/useListenMessage';
const MessageBox = () => {
    const { conversation, messages } = useContext(AuthContext)
    const { loading } = useMessage()
    useListenMessage()
    return (

        <div className='flex flex-col justify-between p-4 md:min-w-[450px]'>
            {
                conversation === null ? <NoChatSelected /> : <>
                    {/* Header */}
                    <div className='bg-slate-200 mb-2 px-4 py-2'>
                        <span className='font-bold text-gray-700'>{conversation.name}</span>
                    </div>
                    <div className={`${messages === undefined ? 'text-center' : 'flex flex-col-reverse'} h-full overflow-y-auto no-scrollbar relative`}>
                        {
                            loading ? <span className='top-1/3 left-1/2 absolute bg-red-500 transform -translate-x-1/2 -translate-y-1/3 loading loading-spinner'></span> : messages === undefined ? <span className='text-gray-600'>Send Messages To start conversation</span> : messages?.map(item => {

                                if (item.receiverId
                                    === conversation.id) {
                                    return <Messages key={item.id} chatPosition='chat-end' item={item} name={item.sender.email} />
                                } else {
                                    return <Messages key={item.id} chatPosition='chat-start' item={item} name={conversation.email} />
                                }
                            })
                        }

                    </div>
                    <MessageInput receiverId={conversation.id} />
                </>

            }

        </div>
    )
}

export default MessageBox

const NoChatSelected = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='flex justify-center items-center w-full h-full'>
            <div className='flex flex-col items-center gap-2 px-4 font-semibold text-center text-gray-600 sm:text-lg md:text-xl'>
                <p>Welcome {user.name.toLocaleUpperCase()} </p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl text-center md:text-6xl' />
            </div>
        </div>
    );
};