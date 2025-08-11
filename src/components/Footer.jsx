import React from 'react'
import tybLogo from "../assets/logoThomas.png"
import logoSky from "../assets/logo-sky.png"
import facebook from "../assets/facebookIcon.png"
import youtube from "../assets/youtubeIcon.png"
import instagram from "../assets/instagramIcon.png"
import { useTranslation } from 'react-i18next'
import LinkedinIcon from './icons/LinkedinIcon'

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer id='contact' className='bg-fuchsia-975 mt-auto sm:py-8 py-6 z-20 relative'>
            <div className='flex flex-row justify-between items-start container mx-auto' >
                <div className=' flex flex-col sm:items-start items-center sm:gap-4 gap-8 px-10 xl:px-10 2xl:px-0 w-3/5'>
                    <h1 className='xl:text-3xl sm:text-2xl text-xl font-medium text-white mx-auto lg:mx-0 tracking-widest md:pb-6'>
                        {t('contact')}
                    </h1>
                    <div className='flex lg:flex-row flex-col w-full justify-between lg:items-start items-center lg:gap-8 gap-10'>
                        <div className='flex w-fit'>
                            <img className='sm:w-full md:w-3/4 w-2/3' src={tybLogo} alt="" />
                        </div>
                        <div className='sm:text-left text-center'>
                            <p className='text-white 2xl:text-xl text-md'>{t('generalManagement')} </p>
                            <p className='font-medium text-white 2xl:text-xl text-md'>Thomas Yaksic Beckdorf</p>
                        </div>
                        <div className='sm:text-left text-center'>
                            <a href="mailto:contact@tybarts.com" className='text-white 2xl:text-xl text-md'>contact@tybarts.com</a>
                            <p className='text-white 2xl:text-xl text-md'>+44 20 3535 5611</p>
                            <a href="https://www.tybarts.com" target="_blank" rel="noreferrer" className='text-white 2xl:text-xl text-md'>www.tybarts.com </a>

                        </div>
                    </div>
                </div>
                <div className='relative pl-12 sm:pb-0 pb-16 w-fit my-auto'>
                    <img className='md:w-3/5 lg:w-3/4 2xl:w-full' src={logoSky} alt="" />
                    <div className='flex flex-row items-center gap-2 md:gap-0 xl:gap-2 pt-4 h-fit absolute bottom-0 right-1/4 sm:top-5 sm:right-0 md:top-0 md:right-1/4 lg:right-0 xl:right-10 xl:top-0 lg:-top-2 2xl:-right-10 2xl:top-5'>
                        <a href="https://www.instagram.com/elmarlampson/" target="_blank" rel="noreferrer" className='p-2 rounded-full h-fit '>
                            <img src={instagram} alt="" />
                        </a>

                        <a href="https://www.facebook.com/elmar.lampson" target="_blank" rel="noreferrer" className='p-2 rounded-full '>
                            <img src={facebook} alt="" />
                        </a>

                        <a href="https://www.youtube.com/channel/UCQMtR1Zbzn0hS5fY_Lhf3bg" target="_blank" rel="noreferrer" className='p-2 rounded-full h-fit '>
                            <img src={youtube} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/elmar-lampson-054403301/" target="_blank" rel="noreferrer" className='p-1 leading-0 rounded-full h-fit bg-white'>
                            <LinkedinIcon/>
                        </a>

                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
