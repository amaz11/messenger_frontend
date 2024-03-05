import React from 'react'
import SearchInput from '../search/SearchInput'
import People from '../conversation/People'
import Logout from '../Logout/Logout'
import useGetUser from '../../hooks/useGetUser'

const Sidebar = () => {
    const { user, loading } = useGetUser()
    return (
        <div className='relative p-4 border-r'>
            <SearchInput />
            <div className='px-3 divider'></div>
            <div className='relative pb-5 h-96 overflow-y-auto no-scrollbar'>
                {
                    loading ? <span className='top-1/3 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/3 loading loading-spinner'></span> : user?.map(item => <People key={item.id} item={item} />)
                }
            </div>
            <Logout />
        </div>
    )
}

export default Sidebar