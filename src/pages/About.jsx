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
        <div className='bg-gray-100 '>
            <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
            <Navbar toggleMenu={toggleMenu} bgLang={'bg-sky-elmar text-white'} bgColor='bg-sky-elmar mix-blend-multiply text-white' />
            <div className='container mx-auto flex flex-row items-center justify-center gap-24 py-20 relative'>
                <div className='w-2/5 self-baseline'>
                    <h1 className='ml-auto w-fit text-sky text-5xl font-bold'>
                        <span>On </span>
                        <span className='italic'>Waves</span>
                    </h1>
                </div>
                <div className='absolute left-4/11 -translate-x-2 h-5/6 top-12'>
                    <img src={vectorAbout} alt="" />
                </div>
                <div className='w-3/5 flex flex-col gap-6'>
                    <div >
                        <p className='font-semibold text-2xl'>
                            “contains passages of unearthly beauty”
                        </p>
                        <p className="text-2xl">
                            (Wolfgang Denker, Der Opernfreund)
                        </p>
                    </div>
                    <div>
                        <p className='font-semibold text-2xl'>
                            an “iridescent score”
                        </p>
                        <p className="text-2xl">
                            (Andreas Schnell, Kreiszeitung)
                        </p>
                    </div>
                    <div>
                        <p className='font-semibold text-2xl'>
                            "Lampson’s music holds nothing back: it moves between wild and tender, between major and minor, with numerous pentatonic touches and hugely demanding ensemble sections... it repeatedly manages to create completely unexpected constellations and confrontations. The percussion formations positioned on both sides of the stage are thrilling."

                        </p>
                        <p className="text-2xl">
                            (Ute Schalz-Laurenze, Neue Musikzeitung)
                        </p>
                    </div>
                </div>
            </div>
            <section className='flex md:flex-row relative flex-col container mx-auto pt-12 xl:gap-16 gap-12 xl:px-0 px-4'>
                <img
                    className='md:w-1/2 w-full h-1/2 md:sticky md:top-0 tilt hover:shadow-xl shadow-none'
                    src={img1}
                    alt=""
                />
                <div className='md:w-1/2 w-full flex flex-col justify-between items-start pb-5'>
                    <h1 className='text-6xl font-bold text-sky'>About</h1>
                    <p className='text-xl font-bold py-4'>Composer</p>
                    <p className='text-lg font-light'>{t('about1')}</p>
                    <p className='text-lg font-light'>{t('about2')}</p>
                    <p className='text-lg font-light'>{t('about3')}</p>
                    <p className='text-lg font-light'>{t('about4')}</p>
                    <p className='text-lg font-light'>{t('about5')}</p>
                    <p className='text-lg font-light'>{t('about6')}</p>
                    <p className='text-md font-light pt-4'>Photo By ©Neda Navaee </p>
                </div>
            </section>
            <section className='flex md:flex-row-reverse relative flex-col container mx-auto pt-12 xl:pt-24 xl:gap-16 gap-12 xl:px-0 px-4'>
                <img className='md:w-1/2 w-full h-1/2 md:sticky md:top-0 tilt hover:shadow-xl shadow-none' src={img2} alt="" />
                <div className='md:w-1/2 w-full h-max-fit flex flex-col justify-between items-start pb-5 '>
                    <h1 className='text-6xl font-bold text-sky'>About my work</h1>
                    <p className='text-xl font-bold py-6'>{t('about7')}</p>
                    <div className='flex flex-col justify-between h-full pb-10'>
                        <p className='text-lg font-light'>{t('about8')}</p>
                        <p className='text-lg font-light'>{t('about9')}</p>
                        <p className='text-lg font-light'>{t('about10')}</p>
                        <p className='text-lg font-light'>{t('about11')}</p>
                        <p className='text-md font-light pt-4'>Photo By ©Neda Navaee </p>
                    </div>
                </div>
            </section>
            <section className='container mx-auto xl:py-12 py-0 sm:px-0 px-4'>
                <div className='bg-elmar md:bg-fixed'></div>
            </section>
            <section className='container mx-auto py-14 sm:px-0 px-4'>
                <div className='w-full h-max-fit flex flex-col justify-start items-start xl:gap-32'>
                    <div className='flex flex-row items-start justify-start xl:gap-16'>
                        <div>
                            <p className='text-lg font-light'>{t('about12')}</p>
                            <p className='text-lg font-light'>{t('about13')}</p>
                            <p className='text-lg font-light'>{t('about14')}</p>
                            <p className='text-lg font-light'>{t('about15')}</p>
                        </div>
                        <div>
                            <p className='text-lg font-light'>{t('about16')}</p>
                            <p className='text-xl font-bold pt-8'>{t('about17')}</p>
                            <p className='text-lg font-light'>{t('about18')}</p>
                            <p className='text-lg font-light'>{t('about19')}</p>
                            <p className='text-lg font-light'>{t('about20')}</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-16'>
                        <div className='w-1/2'>
                            <img className='tilt shadow-none hover:shadow-xl' src={img3} alt="" />
                        </div>
                        <div className='w-1/2 flex flex-col justify-around items-start'>
                            <div>
                                <p className='text-xl font-bold pb-6'>{t('about21')}</p>
                                <p className='text-lg font-light pb-6'>{t('about22')}</p>
                                <p className='text-lg font-light'>{t('about23')}</p>
                            </div>
                            <div>
                                <p className='text-xl font-bold pb-6'>{t('about24')}</p>
                                <p className='text-lg font-light'>{t('about25')}</p>
                                <p className='text-lg font-light'>{t('about26')}</p>
                                <p className='text-lg font-light'>{t('about27')}</p>
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