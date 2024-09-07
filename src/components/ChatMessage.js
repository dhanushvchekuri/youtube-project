import React from 'react'

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      {' '}
      <img
        src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        alt='user'
        className='h-10'
      />
      <span className='font-bold px-2 text-sm'>{name}</span>
      <span className='px-2'>{message}</span>
    </div>
  )
}

export default ChatMessage
