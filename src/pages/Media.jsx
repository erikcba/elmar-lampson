import React from 'react'
import imgAlbum from '../assets/mysterienszenen.png'
import MediaCard from '../components/MediaCard'

const Media = () => {

    const mediaItems = Array(10).fill({
        action: 'Listen',
        logoPlatform: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Spotify_logo_with_text.svg',
        link: 'https://open.spotify.com/album/0x1Z2Y3X4W5V6U7T8S9R0Q1P2O3N4M5L6K7J8H9G'
    });

    return (
        <div className='bg-violet-100 py-16'>
            <div className='container mx-auto px-4 py-8 flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center w-1/3'>
                    <div>
                        <img src={imgAlbum} alt="" />
                        <h1 className='text-2xl text-center font-bold mt-4'>
                            Mysterienszenen
                        </h1>
                        <p className='text-sm text-gray-500 mr-auto font-normal mt-2'>
                            Choose service music below
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center mt-4 bg-white px-3 rounded-lg w-5/6'>
                        {mediaItems.map((item, index) => (
                            <MediaCard
                                key={index}
                                action={item.action}
                                logoPlatform={item.logoPlatform}
                                link={item.link}
                                isFirst={index === 0}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Media