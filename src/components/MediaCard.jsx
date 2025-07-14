import React from 'react'

const MediaCard = ({ logoPlatform, link, action, isFirst }) => {
  return (
    <div className={`flex flex-row items-center justify-between py-5 w-full ${!isFirst ? 'border-t border-gray-100' : ''}`}>
      <img src={logoPlatform} alt="" />
      <a href={link} target="_blank" rel="noreferrer" className='bg-gray-200 font-semibold text-gray-600 py-2 px-4 rounded-md'>
        {action}
      </a>
    </div>
  )
}


export default MediaCard