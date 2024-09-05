import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Head = () => {
  const dispatch = useDispatch()

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          onClick={() => toggleMenuHandler()}
          src='https://cdn-icons-png.flaticon.com/512/8182/8182885.png'
          alt='menu'
          className='h-8 cursor-pointer'
        />
        <a href='/'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png'
            alt='youtube-logo'
            className='h-8 mx-2'
          />
        </a>
      </div>
      <div className='col-span-10 flex justify-center'>
        <input
          type='text'
          className='w-1/2 border border-gray-400 rounded-l-full p-2'
        />
        <button className='border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100'>
          🔍
        </button>
      </div>
      <div className='col-span-1 flex justify-end'>
        <img
          src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
          alt='user'
          className='h-10'
        />
      </div>
    </div>
  )
}

export default Head
