import React from 'react'

const People = () => {
    return (
        <>
            <div
                className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
			
			`}
            // ${isSelected ? "bg-sky-500" : ""}
            // onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar `}
                // ${isOnline ? "online" : ""}
                >
                    <div className='rounded-full w-12'>
                        <img src={`https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg`} alt='user avatar' />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex justify-between gap-3'>
                        <p className='font-bold text-gray-600'>Name</p>
                    </div>
                </div>
            </div>

            {/* {!lastIdx && <div className='my-0 py-0 h-1 divider' />} */}
            <div className='my-0 py-0 h-1 divider' />
        </>
    )
}

export default People