import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import img1 from '../assets/elmar_lampson.jpg'
import img2 from '../assets/about_music.png'
import img3 from '../assets/img4-about.png'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import VanillaTilt from 'vanilla-tilt'
import vectorAbout from '../assets/vector-about.png'

const About = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const { t } = useTranslation()

    useEffect(() => {
        const tiltElements = document.querySelectorAll('.tilt')
        VanillaTilt.init(tiltElements, {
            max: 5,
            speed: 800,
            scale: 1.02,
            glare: true,
            "max-glare": 0.2,
        });
    }, [])

    return (
        <div className='bg-white '>
            <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
            <div className='px-6 xl:px-0 xl:pt-16 2xl:pt-32'>
                <Navbar toggleMenu={toggleMenu} bgLang={'bg-sky-elmar text-white'} bgColor='bg-sky-elmar mix-blend-multiply text-white' />
            </div>
            <div className='container mx-auto flex xl:flex-row flex-col items-center justify-center xl:gap-24 gap-18 xl:py-20 py-10 px-6 xl:px-20 2xl:px-0 relative'>
                <div className='w-2/5 self-baseline'>
                    <h1 className='ml-auto w-fit text-sky text-5xl font-bold'>
                        <span>{t('waves1')} </span>
                        <span className='italic'> {t('waves2')}</span>
                    </h1>
                </div>
                <div className='absolute xl:left-4/11 right-1/3 xl:-translate-x-2  top-8 xl:top-12'>
                    <img src={vectorAbout} alt="" className='xl:h-5/6 h-40' />
                </div>
                <div className='xl:w-3/5 w-full flex flex-col gap-6'>
                    <div >
                        <p className='font-semibold text-xl xl:text-2xl'>
                            {t('waves3')}
                        </p>
                        <p className="text-xl xl:text-2xl">
                            {t('waves4')}
                        </p>
                    </div>
                    <div>
                        <p className='font-semibold text-xl xl:text-2xl'>
                            {t('waves5')}
                        </p>
                        <p className="text-xl xl:text-2xl">
                            {t('waves6')}
                        </p>
                    </div>
                    <div>
                        <p className='font-semibold text-xl xl:text-2xl'>
                            {t('waves7')}
                        </p>
                        <p className="text-xl xl:text-2xl">
                            {t('waves8')}
                        </p>
                    </div>
                </div>
            </div>
            <section data-aos="fade-up" className='flex md:flex-row relative flex-col container mx-auto pt-12 xl:gap-16 gap-12 xl:px-20 2xl:px-0 px-4'>
                <img
                    className='md:w-1/2 w-full h-1/2 md:sticky md:top-0 tilt hover:shadow-xl shadow-none'
                    src={img1}
                    alt=""
                />
                <div className='md:w-1/2 w-full flex flex-col justify-between items-start pb-5'>
                    <h1 className='text-6xl font-bold text-sky'>About</h1>
                    <p className='text-xl font-bold py-4'>{t('composer')}</p>
                    <p className='sm:text-lg text-md font-light'>{t('about1')}</p>
                    <p className='sm:text-lg text-md font-light'>{t('about2')}</p>
                    <p className='sm:text-lg text-md font-light'>{t('about3')}</p>
                    <p className='sm:text-lg text-md font-light'>{t('about4')}</p>
                    <p className='sm:text-lg text-md font-light'>{t('about5')}</p>
                    <p className='sm:text-lg text-md font-light'>{t('about6')}</p>
                    <p className='text-md font-light pt-4'>Photo By ©Neda Navaee </p>
                </div>
            </section>
            <section data-aos="fade-up" className='flex md:flex-row-reverse relative flex-col container mx-auto pt-12 xl:pt-24 xl:gap-16 gap-12 xl:px-20 2xl:px-0 px-6'>
                <img className='md:w-1/2 w-full h-1/2 md:sticky md:top-0 tilt hover:shadow-xl shadow-none' src={img2} alt="" />
                <div className='md:w-1/2 w-full h-max-fit flex flex-col justify-between items-start pb-5 '>
                    <h1 className='text-6xl font-bold text-sky'>About my work</h1>
                    <p className='text-xl font-bold py-6'>{t('about7')}</p>
                    <div className='flex flex-col justify-between h-full pb-10'>
                        <p className='sm:text-lg text-md font-light'>{t('about8')}</p>
                        <p className='sm:text-lg text-md font-light'>{t('about9')}</p>
                        <p className='sm:text-lg text-md font-light'>{t('about10')}</p>
                        <p className='sm:text-lg text-md font-light'>{t('about11')}</p>
                        <p className='text-md font-light pt-4'>Photo By ©Neda Navaee </p>
                    </div>
                </div>
            </section>
            <section className='container mx-auto xl:py-12 py-6 xl:px-20 2xl:px-0 px-6'>
                <div className='bg-elmar md:bg-fixed'></div>
            </section>
            <section className='container mx-auto md:py-8 py-6 xl:px-20 2xl:px-0 px-6'>
                <div className='w-full h-max-fit flex flex-col justify-start items-start xl:gap-32'>
                    <div data-aos="fade-up" className='flex lg:flex-row flex-col items-start justify-start xl:gap-16 gap-6 lg:mb-0 mb-6 '>
                        <div className='lg:w-1/2 w-full'>
                            <p className='sm:text-lg text-md font-light'>{t('about12')}</p>
                            <p className='sm:text-lg text-md font-light'>{t('about13')}</p>
                            <p className='sm:text-lg text-md font-light'>{t('about14')}</p>
                            <p className='sm:text-lg text-md font-light'>{t('about15')}</p>
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <p className='sm:text-lg text-md font-light'>{t('about16')}</p>
                            <p className='text-xl font-bold pt-8'>{t('about17')}</p>
                            <p className='sm:text-lg text-md font-light'>{t('about18')}</p>
                            <p className='sm:text-lg text-md font-light'>{t('about19')}</p>
                            <p className='sm:text-lg text-md font-light'>{t('about20')}</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='flex lg:flex-row flex-col xl:gap-16 gap-6 xl:mt-0 mt-6'>
                        <div className='lg:w-1/2 w-full'>
                            <img className='tilt shadow-none hover:shadow-xl md:sticky md:top-0' src={img3} alt="" />
                        </div>
                        <div className='lg:w-1/2 w-full flex flex-col justify-around items-start md:gap-8 gap-4'>
                            <div>
                                <p className='text-xl font-bold pb-6'>{t('about21')}</p>
                                <p className='sm:text-lg text-md font-light pb-6'>{t('about22')}</p>
                                <p className='sm:text-lg text-md font-light'>{t('about23')}</p>
                            </div>
                            <div>
                                <p className='text-xl font-bold pb-6'>{t('about24')}</p>
                                <p className='sm:text-lg text-md font-light'>{t('about25')}</p>
                                <p className='sm:text-lg text-md font-light'>{t('about26')}</p>
                                <p className='sm:text-lg text-md font-light'>{t('about27')}</p>
                                <p className='text-md font-light pt-4'>Photo By ©Neda Navaee </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default About