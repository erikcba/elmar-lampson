import React, { useState } from 'react'
import Menu from '../../components/Menu'
import Navbar from '../../components/Navbar'
import MenuIcon from '../../components/icons/MenuIcon'
import divisor1 from '../../assets/divisor-mymusic1.png'
import divisor2 from '../../assets/divisor-mymusic2.png'
import TicketsCard from './TicketsCard'
import Footer from '../../components/Footer'

const Calendar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Menu toggleMenu={toggleMenu} isOpen={isOpen} />
            <section >
                <div className=' xl:pt-32 pt-0'>
                    <div className='relative px-6 xl:px-0'>
                        <Navbar toggleMenu={toggleMenu} bgLang={'bg-sky-elmar text-white'} bgColor='bg-sky-elmar mix-blend-multiply text-white' />
                    </div>
                    <div className='relative z-10 px-6 md:pb-12 md: pt-24 xl:px-0'>
                        <div className='container flex flex-col md:gap-8 gap-4 mx-auto z-10'>
                            <h1 className='text-sky md:text-5xl text-3xl font-bold'>
                                Calendar
                            </h1>
                            <p className='font-bold md:text-4xl text-2xl relative z-10'>
                                Upcoming Concerts
                            </p>
                            <div className='flex flex-col gap-8 pt-8'>
                                <TicketsCard date={'24 May 2025'} place={'Theater Bremen'} title={'Premiere of the opera Wellen'} subtitle={'Comissioned by Theater Bremen'} director={'Opera by Elmar Lampson'} description={'Text by Julia Spinola after Eduard von Keyserling, In German with German surtitles'} musicDirector={'Yoel Gamzou'} stageDirector={'Philipp Rosendahl'} />
                                <TicketsCard date={'27 May 2025, 7:00PM'} place={'Theater Bremen'} title={'Wellen'} />
                                <TicketsCard date={'5 June 2025, 7:00PM'} place={'Theater Bremen'} title={'Wellen'} />
                                <TicketsCard date={'7 June 2025, 7:00PM'} place={'Theater Bremen'} title={'Wellen'} />
                                <TicketsCard date={'13 June 2025, 7:00PM'} place={'Theater Bremen'} title={'Wellen'} />
                                <TicketsCard date={'15 June 2025, 7:00PM'} place={'Theater Bremen'} title={'Wellen'} />
                                <TicketsCard date={'18 June 2025, 7:00PM'} place={'Theater Bremen'} title={'Wellen'} />
                                <TicketsCard date={'8 October 2025'} place={'Schenzhen Concert Hal'} title={'Chamber and ensemble works'} />
                                <TicketsCard date={'Summer 2026'} place={'Schenzhen Concert Hal'} title={'World Premiere: Sea Symphony Parts I, II and II'} subtitle={'Commissioned by Theater Bremen'} />
                            </div>
                        </div>

                    </div>
                    <div className='py-12 relative'>
                        <h1 className='font-bold xl:text-3xl text-2xl z-10 relative container mx-auto px-6 xl:px-0'>
                            Previous Concerts
                        </h1>
                        <img className='absolute w-full top-6 h-16 z-0' src={divisor2} alt="" />
                        <div className='flex flex-col container mx-auto 2xl:gap-6 gap-8 2xl:py-12 px-6 xl:px-0'>
                            <div className='flex flex-col gap-0'>
                                <div className='flex flex-col mb-3'>
                                    <h3 className='xl:text-2xl text-xl font-semibold'>
                                        18 May 2025, 11:00AM,
                                    </h3>
                                    <p className='text-sm font-light'>
                                        Theater Bremen
                                    </p>
                                    <h1 className='xl:text-3xl text-2xl font-bold'>
                                        Matinee for the opera Wellen premiere
                                    </h1>
                                    <p className='text-sm font-light'>

                                    </p>
                                </div>
                                <div className='flex flex-col gap-0 mb-2'>
                                    <p className='text-md font-semibold'>

                                    </p>
                                    <p className='text-sm font-light'>

                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-0'>
                                <div className='flex flex-col mb-3'>
                                    <h3 className='xl:text-2xl text-xl font-semibold'>
                                        26 October 2024
                                    </h3>
                                    <p className='text-sm font-light'>
                                        Shenzhen Concert Hall
                                    </p>
                                    <h1 className='xl:text-3xl text-2xl font-bold'>
                                        World Premiere: Sea Symphony Part II – 1. Dreams and Inklings, 2. Eerie Morning (2024)
                                    </h1>
                                    <p className='text-sm font-light'>
                                        Commissioned by the Shenzhen Symphony Orchestra
                                    </p>
                                </div>
                                <div className='flex flex-col gap-0 mb-2'>
                                    <p className='text-md font-semibold'>
                                        Shenzhen Symphony Orchestra
                                    </p>
                                    <p className='text-sm font-light'>
                                        Conductor: Daye Lin
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-0'>
                                <div className='flex flex-col mb-3'>
                                    <h3 className='xl:text-2xl text-xl font-semibold'>
                                        8 December 2023
                                    </h3>
                                    <p className='text-sm font-light'>
                                        Shenzhen Concert Hall
                                    </p>
                                    <h1 className='xl:text-3xl text-2xl font-bold'>
                                        World Premiere: Sea Symphony Part I – The Stormy Sea (2020–2023)                                    </h1>
                                    <p className='text-sm font-light'>
                                        Commissioned by the Shenzhen Symphony Orchestra
                                    </p>
                                </div>
                                <div className='flex flex-col gap-0 mb-2'>
                                    <p className='text-md font-semibold'>
                                        Shenzhen Symphony Orchestra
                                    </p>
                                    <p className='text-sm font-light'>
                                        Conductor: Daye Lin
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-0'>
                                <div className='flex flex-col mb-3'>
                                    <h3 className='xl:text-2xl text-xl font-semibold'>
                                        17 September 2023
                                    </h3>
                                    <p className='text-sm font-light'>
                                        The Ernst Deutsch Theater, Hamburg
                                    </p>
                                    <h1 className='xl:text-3xl text-2xl font-bold'>
                                        Music for St. Michaelis
                                    </h1>
                                    <p className='text-sm font-semibold'>
                                        Performance on the occasion of the Gustaf Gründgens Prize ceremony <br />
                                        Philharmonic State Orchestra Hamburg
                                    </p>
                                    <p className='text-sm font-light'>
                                        Conductor: Kent Nagano
                                    </p>
                                </div>
                                <div className='flex flex-col gap-0 mb-2'>
                                    <p className='text-sm font-light'>
                                        Link to article (German)
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-0'>
                                <div className='flex flex-col mb-3'>
                                    <h3 className='xl:text-2xl text-xl font-semibold'>
                                        4 October 2020
                                    </h3>
                                    <h1 className='xl:text-3xl text-2xl font-bold'>
                                        World Premiere. Prayers at the Sea (2017–2020) <br />
                                        for Choir and Percussion (2)
                                    </h1>
                                    <p className='text-sm font-light'>
                                        Commissioned by the Philharmonic State Orchestra Hamburg
                                    </p>

                                </div>
                                <div className='flex flex-col gap-0 mb-2'>
                                    <p className='text-sm font-semibold'>
                                        World Premiere: Lausitz Festival <br />
                                        Europa Chorakademie Görlitz <br />
                                        Percussionists of Klangforum Wien
                                    </p>
                                    <p className='text-sm font-light'>
                                        Conductor: Sylvain Cambreling
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='absolute w-full xl:top-31 top-8 translate-y-53 h-14 2xl:translate-y-100 z-0' src={divisor1} alt="" />

            </section>
            <Footer/>
        </div>
    )
}

export default Calendar