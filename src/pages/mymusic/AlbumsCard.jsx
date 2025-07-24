import React from 'react'

const AlbumsCard = ({ img, title, colEgno, description }) => {
  return (
    <div className='flex flex-col'>
      <img className='h-fit mb-4' src={img} alt="" />
      <div className=''>
        <h1 className='font-bold'>
          {title} <span className='font-light'>{colEgno} </span>
        </h1>
      </div>
      <p className='font-light'>
        {description}
      </p>
    </div>
  )
}

export default AlbumsCard