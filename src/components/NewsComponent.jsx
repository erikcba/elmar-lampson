import React from 'react'

const NewsComponent = ({ image, title, date, description }) => {
    return (
        <div className='flex xl:flex-row flex-col items-start gap-10 justify-start'>
            <div className='bg-gray-400 h-52 w-80 md:shrink-0'>
            </div>

            <div className='flex flex-col w-full gap-2'>
                <h2 className='font-bold text-xl'>
                    {title}
                </h2>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold text-md xl:text-xl text-sky-700'>
                        {date}
                    </p>
                    <p className='font-light text-md xl:text-xl '>
                        {description}
                    </p>
                </div>

            </div>

        </div>
    )
}

export default NewsComponent