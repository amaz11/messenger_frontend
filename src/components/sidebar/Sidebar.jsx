import React from 'react'
import SearchInput from '../search/SearchInput'
import People from '../conversation/People'
import Logout from '../Logout/Logout'

const Sidebar = () => {
    return (
        <div className='relative p-4 border-r'>
            <SearchInput />
            <div className='px-3 divider'></div>
            <div className='pb-5 h-full overflow-y-auto no-scrollbar'>
                <People />
            </div>
            <Logout />
        </div>
    )
}

export default Sidebar