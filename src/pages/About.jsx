import React from 'react'
import Navbar from '../components/Navbar'
import img1 from '../assets/elmar_lampson.jpg'
import img2 from '../assets/about_music.png'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer'

const About = () => {
    const { t } = useTranslation()
    return (
        <div>
            <Navbar />
            <section className='flex sm:flex-row flex-col container mx-auto pt-12 sm:pt-24 gap-16 sm:px-0 px-4'>
                <img className='sm:w-1/2 w-full' src={img1} alt="" />
                <div className='sm:w-1/2 w-full h-max-fit flex flex-col justify-between items-start pb-5'>
                    <h1 className='orbitron text-4xl font-medium text-fuchsia-800 tracking-widest'>About me</h1>
                    <p className='text-lg font-light'>{t('about1')}</p>
                    <p className='text-lg font-light'>{t('about2')}</p>
                    <p className='text-lg font-light'>{t('about3')}</p>
                    <p className='text-lg font-light'>{t('about4')}</p>
                    <p className='text-lg font-light'>{t('about5')}</p>
                    <p className='text-lg font-light'>{t('about6')}</p>
                </div>
            </section>
            <section className='flex sm:flex-row-reverse flex-col container mx-auto pt-12 sm:pt-32 gap-16 sm:px-0 px-4'>
                <img className='sm:w-1/2 w-full' src={img2} alt="" />
                <div className='sm:w-1/2 w-full h-max-fit flex flex-col justify-start items-start '>
                    <h1 className='orbitron text-4xl font-medium text-fuchsia-800 tracking-widest'>About my music,</h1>
                    <p className='text-xl font-bold py-6'>{t('about7')}</p>
                    <div className='flex flex-col justify-between h-full pb-10'>
                        <p className='text-lg font-light'>{t('about8')}</p>
                        <p className='text-lg font-light'>{t('about9')}</p>
                        <p className='text-lg font-light'>{t('about10')}</p>
                        <p className='text-lg font-light'>{t('about11')}</p>
                    </div>
                </div>
            </section>
            <section className='container mx-auto sm:py-24 py-0 sm:px-0 px-4'>
                <div className='bg-elmar bg-fixed'></div>
            </section>
            <section className='container mx-auto py-14 px-4'>
                <div className='w-full h-max-fit flex flex-col justify-start items-start gap-5'>
                    <p className='text-lg font-light'>{t('about12')}</p>
                    <p className='text-lg font-light'>{t('about13')}</p>
                    <p className='text-lg font-light'>{t('about14')}</p>
                    <p className='text-lg font-light'>{t('about15')}</p>
                    <p className='text-lg font-light'>{t('about16')}</p>
                    <p className='text-xl font-bold'>{t('about17')}</p>
                    <p className='text-lg font-light'>{t('about18')}</p>
                    <p className='text-lg font-light'>{t('about19')}</p>
                    <p className='text-lg font-light'>{t('about20')}</p>
                    <p className='text-xl font-bold'>{t('about21')}</p>
                    <p className='text-lg font-light'>{t('about22')}</p>
                    <p className='text-lg font-light'>{t('about23')}</p>
                    <p className='text-xl font-bold'>{t('about24')}</p>
                    <p className='text-lg font-light'>{t('about25')}</p>
                    <p className='text-lg font-light'>{t('about26')}</p>
                    <p className='text-lg font-light'>{t('about27')}</p>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default About