import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('')
  const dispatch = useDispatch()

  const chatMessages = useSelector((store) => store.chat.messages)

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling every 2s

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(30),
        })
      )
    }, 2000)

    return () => {
      clearInterval(i)
    }
  }, [])
  return (
    <>
      <div className='ml-2 p-2 border border-black w-full h-[534.85px] bg-slate-100 rounded-t-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
          {chatMessages.map((chat, index) => (
            <ChatMessage name={chat.name} message={chat.message} key={index} />
          ))}
        </div>
      </div>
      <form
        className='bg-gray-200 w-full p-2 ml-2 rounded-b-lg'
        onSubmit={(e) => {
          e.preventDefault()
          //console.log('Submitted')
          dispatch(
            addMessage({
              name: 'Dhanush',
              message: liveMessage,
            })
          )
          setLiveMessage('')
        }}
      >
        <input
          type='text'
          className='w-[21.5rem] rounded-lg p-2'
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value)
          }}
        />
        <button className='px-4 mx-2 bg-green-100 w-fit'>Send</button>
      </form>
    </>
  )
}

export default LiveChat
