import React from 'react'

const Tickets = ({ date, place, title, subtitle, director, description, musicDirector, stageDirector, link }) => {
  return (
    <div className='flex flex-col gap-0'>
      <div className='flex flex-col mb-4'>
        <h1 className='xl:text-3xl text-2xl font-bold'>
          {title}
        </h1>
        <h3 className='xl:text-2xl text-xl font-semibold'>
          {date}
        </h3>
        <p className='text-sm font-light'>
          {place}
        </p>
        <p className='text-sm font-light'>
          {subtitle}
        </p>
      </div>
      <div className='flex flex-col gap-0 mb-6'>
        <p className='text-md font-semibold'>
          {director}
        </p>
        <p className='text-sm font-light'>
          {description}
        </p>
        <div className='flex flex-row gap-1 items-center justify-start'>
          {
            musicDirector &&
            <div className='flex flex-row gap-1 items-center justify-start'>
              <p className='text-sm font-semibold'>Musical direction</p>
              <p className='font-light'>{musicDirector}</p>
            </div>
          }
        </div>
        <div className='flex flex-row gap-1 items-center justify-start'>
          {
            stageDirector && <div className='flex flex-row gap-1 items-center justify-start'><p className='text-sm font-semibold'>Stage direction</p>  <p className='font-light'>{stageDirector}</p></div>
          }
        </div>
      </div>
      <button className='bg-sky-100 font-bold text-center w-fit px-5 py-2 rounded-md hover:cursor-pointer btn-buy hover:text-white transition-colors duration-300'>
        Buy tickets
      </button>
    </div>
  )
}

export default Tickets