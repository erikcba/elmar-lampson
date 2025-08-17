import React from 'react'
import CloseIcon from '../assets/cerrarAzul.png'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { useTranslation } from 'react-i18next'
import vector from '../assets/vector-about.png'
import tybLogo from "../assets/logoThomas.png"
import LinkedinIcon from './icons/LinkedinIcon'
import facebook from "../assets/facebookIcon.png"
import youtube from "../assets/youtubeIcon.png"
import instagram from "../assets/instagramIcon.png"

const Contact = ({ isOpen, toggleMenu }) => {

    const { i18n, t } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'de' ? 'en' : 'de';
        i18n.changeLanguage(newLang)
    }

    return (
        <>
            <div
                className={`
          fixed top-0 left-0 w-full h-screen z-50 
          transform transition-transform duration-500 ease-in-out 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                <div className="bg-fuchsia-975 overflow-hidden h-screen  ">
                    <div className="container mx-auto h-full lg:pb-32 lg:pt-12 relative 2xl:px-0 px-6">
                        <img src={CloseIcon} alt="" onClick={toggleMenu} className="ml-auto cursor-pointer absolute md:relative right-5 top-13 z-20 hover:scale-75 hover:rotate-180 duration-500 transition-all ease-in-out" />
                        <div className="relative">
                            <Navbar toggleMenu={toggleMenu} hide={'hidden'} bgLang={'bg-white text-black'} isOpen={isOpen} bgColor='bg-sky-elmar mix-blend-lighten text-black' />
                            <span
                                onClick={toggleLanguage}
                                className={`btn-language transition-all ease-in-out absolute md:left-2/7 lg:left-50 xl:left-75 xl:top-2 md:translate-x-20 md:top-15 md:mt-0 left-53 2xl:top-8 2xl:left-100 bg-white top-14 md:text-2xl text-xl w-fit font-bold rounded-full py-3 px-2 leading-none cursor-pointer select-none`}
                            >
                                {t('language')}
                            </span>
                        </div>
                        <div className='flex flex-col md:flex-row justify-center gap-10 items-start h-fit mt-10 mx-auto md:ml-auto md:mr-20 w-fit'>
                            <div>
                                <h2 className='text-4xl md:text-5xl 2xl:text-6xl font-bold text-center pt-6 text-sky'>
                                    {t('contact')}
                                </h2>
                            </div>
                            <div className='h-78 2xl:h-fit hidden md:block'>
                                <img className='2xl:h-fit h-full' src={vector} alt="" />
                            </div>
                            <div className='flex flex-col my-auto justify-between items-start 2xl:gap-8 lg:gap-6 gap-8'>
                                <div className='flex w-fit '>
                                    <img className='sm:w-full md:w-3/4 w-2/3' src={tybLogo} alt="" />
                                </div>
                                <div className='text-left md:text-center'>
                                    <p className='text-white 2xl:text-xl text-md'>{t('generalManagement')} </p>
                                    <p className='font-medium text-white 2xl:text-xl text-md'>Thomas Yaksic Beckdorf</p>
                                </div>
                                <div className='text-left md:text-center'>
                                    <a href="mailto:contact@tybarts.com" className='text-white 2xl:text-xl text-md'>contact@tybarts.com</a>
                                    <p className='text-white 2xl:text-xl text-md'>+44 20 3535 5611</p>
                                    <a href="https://www.tybarts.com" target="_blank" rel="noreferrer" className='text-white 2xl:text-xl text-md'>www.tybarts.com </a>
                                </div>
                            </div>
                            <div className=' w-fit my-auto'>
                                <div className='flex flex-row md:flex-col items-center gap-2 md:gap-0 xl:gap-2 pt-4 h-fit '>
                                    <a href="https://www.instagram.com/elmarlampson/" target="_blank" rel="noreferrer" className='p-2 rounded-full h-fit '>
                                        <img src={instagram} alt="" />
                                    </a>

                                    <a href="https://www.facebook.com/elmar.lampson" target="_blank" rel="noreferrer" className='p-2 rounded-full '>
                                        <img src={facebook} alt="" />
                                    </a>

                                    <a href="https://www.youtube.com/@ElmarLampsonComposer/videos" target="_blank" rel="noreferrer" className='p-2 rounded-full h-fit '>
                                        <img src={youtube} alt="" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/elmar-lampson-054403301/" target="_blank" rel="noreferrer" className='p-1 leading-0 rounded-full h-fit bg-white'>
                                        <LinkedinIcon />
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
