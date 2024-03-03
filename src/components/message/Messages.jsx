import React from 'react'

const Messages = ({ chatPosition }) => {
    return (
        <div className={`chat ${chatPosition}`}>
            <div className='avatar chat-image'>
                <div className='rounded-full w-10'>
                    <img alt='Tailwind CSS chat bubble component' src={'https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg'} />
                </div>
            </div>
            <div className="chat-header">
                Obi-Wan Kenobi
            </div>
            <div>
                <div className={`chat-bubble text-white break-words`}>message.message</div>
                <div className='flex items-center gap-1 opacity-50 text-xs chat-footer'>12:45</div>
            </div>
        </div>
    )
}

export default Messages