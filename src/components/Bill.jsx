import React from 'react'

function Bill({item}) {
     const {id, image, amount, price, title} = item
  return (

    <div className='flex justify-between items-center my-10'>
        <div className='flex gap-2'>
            <img className='w-10 h-10' src={image} alt={title} />
            <p>{title.split(' ').slice(0,2).join(' ')}</p>
        </div>
        <p>{amount * price}</p>
    </div>
  )
}

export default Bill