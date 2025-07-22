import React from 'react'
import imgAlbum from '../assets/mysterienszenen.png'
import MediaCard from '../components/MediaCard'
import apple from '../assets/apple.png'
import spotify from '../assets/spotify.png'
import youtube from '../assets/youtube.png'
import soundcloud from '../assets/soundcloud.png'
import deezer from '../assets/deezer.png'
import youtubeMusic from '../assets/youtubeMusic.png'
import amazon from '../assets/amazonMedia.png'
import itunes from '../assets/itunes.png'
import pandora from '../assets/pandora.png'
import tidal from '../assets/tidal.png'

const Media = () => {

    const mediaItems = [
        {
            action: 'Listen',
            logoPlatform: apple,
            link: 'https://classical.music.apple.com/gb/artist/83224972'
        },
        {
            action: 'Soon',
            logoPlatform: amazon,
            link: ''
        },
        {
            action: 'Soon',
            logoPlatform: deezer,
            link: ''
        },
        {
            action: 'Soon',
            logoPlatform: itunes,
            link: ''
        },
        {
            action: 'Soon',
            logoPlatform: pandora,
            link: ''
        },
        {
            action: 'Soon',
            logoPlatform: soundcloud,
            link: ''
        },
        {
            action: 'Listen',
            logoPlatform: spotify,
            link: 'https://open.spotify.com/artist/0aVVCnadWDlwvkETQTzHAE'
        },
        {
            action: 'Soon',
            logoPlatform: tidal,
            link: ''
        },
        {
            action: 'Soon',
            logoPlatform: youtubeMusic,
            link: ''
        },
        {
            action: 'Soon',
            logoPlatform: youtube,
            link: ''
        }
    ]

    return (
        <div className='bg-violet-100 py-16'>
            <div className='container mx-auto px-4 py-8 flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center w-full sm:w-1/3'>
                    <div>
                        <img src={imgAlbum} alt="" />
                        <h1 className='text-2xl text-center font-bold mt-4'>
                            Mysterienszenen
                        </h1>
                        <p className='text-sm text-gray-500 mr-auto font-normal mt-2'>
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