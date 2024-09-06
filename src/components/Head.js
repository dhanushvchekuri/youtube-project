import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const searchCache = useSelector((store) => store.search)
  const dispatch = useDispatch()

  useEffect(() => {
    //MAKE API Call after every key press
    // but if difference between 2 API calls < 200ms
    //decline the API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getSearchSuggestions()
      }
    }, 200)
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])

  const getSearchSuggestions = async () => {
    console.log(searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json()
    //console.log(json)
    setSuggestions(json[1])

    //Update in cache store
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    )
  }

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
      <div className='col-span-10'>
        <div className='flex justify-center'>
          <input
            type='text'
            className='w-1/2 border border-gray-400 rounded-l-full py-2 px-5'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className='border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100'>
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className='absolute translate-x-56 bg-white w-[31.5rem] shadow-lg rounded-lg border border-gray-100'>
            <ul>
              {suggestions.map((s, index) => (
                <li className='p-2 m-1 shadow-sm hover:bg-gray-200' key={index}>
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
