import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthUser'
import useMessage from '../../hooks/useMessage'

const People = ({ item }) => {
    const { conversation, setConversation } = useContext(AuthContext)
    const { getMessages } = useMessage()
    return (
        <>
            <div
                className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
                ${conversation === null ? "" : conversation.id === item.id ? "bg-sky-500" : ''}
			`}
                onClick={() => {
                    setConversation(item)
                    getMessages(item.id)
                }}
            >
                <div className={`avatar `}
                // ${isOnline ? "online" : ""}
                >
                    <div className='rounded-full w-12'>
                        <img src={`https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg`} className='w-full' alt='user avatar' />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex justify-between gap-3'>
                        <p className='font-bold text-gray-600'>{item?.name}</p>
                    </div>
                </div>
            </div>

            <div className='last:hidden my-0 py-0 h-1 divider' />
        </>
    )
}

export default People