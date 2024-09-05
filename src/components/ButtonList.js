import React from 'react'
import Button from './Button'

const list = [
  'All',
  'Gaming',
  'Songs',
  'Live',
  'Soccer',
  'Cricket',
  'Cooking',
  'Nani',
]
const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((item, index) => (
        <Button name={item} key={index} />
      ))}
    </div>
  )
}

export default ButtonList
