import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageBox from '../../components/message/MessageBox'

const Home = () => {
    return (
        <div className='flex bg-clip-padding bg-white backdrop-blur-lg backdrop-filter px-4 rounded-lg sm:h-[450px] md:h-[550px] overflow-hidden'>
            <Sidebar />
            <MessageBox />
        </div>
    )
}

export default Home