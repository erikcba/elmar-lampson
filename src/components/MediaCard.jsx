import React from 'react'

const MediaCard = ({ logoPlatform, link, action, isFirst }) => {

  const isDisabled = !link;

  return (
    <div className={`flex flex-row items-center justify-between py-5 w-full ${!isFirst ? 'border-t border-gray-100' : ''}`}>
      <img src={logoPlatform} alt="" />
      {isDisabled ? (
        <span className="font-semibold cursor-not-allowed bg-gray-300 text-gray-400 py-2 px-4 rounded-md">
          {action}
        </span>
      ) : (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-gray-600 bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300"
        >
          {action}
        </a>
      )}
    </div>
  )
}


export default MediaCard