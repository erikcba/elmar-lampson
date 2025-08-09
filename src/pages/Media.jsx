import React from 'react'
import imgAlbum from '../assets/mysterienszenen.png'
import MediaCard from '../components/MediaCard'
import apple from '../assets/apple.png'
import spotify from '../assets/spotify.png'
import youtube from '../assets/youtube.png'
import youtubeMusic from '../assets/youtubeMusic.png'
import amazon from '../assets/amazonMedia.png'
import tidal from '../assets/tidal.png'

const Media = () => {

    const mediaItems = [
        {
            action: 'Listen',
            logoPlatform: apple,
            link: 'https://classical.music.apple.com/gb/artist/83224972'
        },
        {
            action: 'Listen',
            logoPlatform: amazon,
            link: 'https://music.amazon.co.uk/search/elmar+lampson?filter=IsLibrary%7Cfalse&sc=none'
        },
        {
            action: 'Listen',
            logoPlatform: spotify,
            link: 'https://open.spotify.com/artist/0aVVCnadWDlwvkETQTzHAE'
        },
        {
            action: 'Listen',
            logoPlatform: tidal,
            link: 'https://tidal.com/browse/artist/4181657'
        },
        {
            action: 'Watch',
            logoPlatform: youtube,
            link: 'https://www.youtube.com/channel/UCQMtR1Zbzn0hS5fY_Lhf3bg'
        }
    ]

    return (
        <div className='bg-violet-100 h-svh py-16'>
            <div className='container mx-auto px-4 py-8 flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center w-full sm:w-1/3'>
                    <div>
                        <img src={imgAlbum} alt="" />
                        <h1 className='text-2xl text-center font-bold mt-4'>
                            Mysterienszenen
                        </h1>
                        <p className='text-sm text-gray-500 text-center font-normal mt-2'>
                            Choose service music below
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center mt-4 bg-white px-5 rounded-lg w-full sm:w-5/6'>
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