import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
    const [search, setSearch] = useState("");
    return (
        <form className='flex items-center gap-2'>
            <input
                type='text'
                placeholder='Search…'
                className='bg-gray-200 input-bordered rounded-full text-gray-600 input'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit' className='bg-sky-500 text-white btn btn-circle'>
                <IoSearchSharp className='w-6 h-6 outline-none' />
            </button>
        </form>
    )
}

export default SearchInput