import React, { useState } from 'react'
import Menu from '../../components/Menu'
import Navbar from '../../components/Navbar'
import MenuIcon from '../../components/icons/MenuIcon'
import divisor1 from '../../assets/divisor-mymusic1.png'
import divisor2 from '../../assets/divisor-mymusic2.png'
import TicketsCard from './TicketsCard'

const Calendar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Menu toggleMenu={toggleMenu} isOpen={isOpen} />
            <section className='py-12'>
                <div className=''>
                    <div className='relative'>
                        <Navbar toggleMenu={toggleMenu} bgLang={'bg-sky-elmar text-white'} bgColor='bg-sky-elmar mix-blend-multiply text-white' />
                        <MenuIcon color={"white"} onClick={toggleMenu} className="absolute left-1/4 top-1/7 cursor-pointer" />
                    </div>
                    <div className='relative z-10'>
                        <div className='container flex flex-col gap-8 mx-auto z-10'>
                            <h1 className='text-sky text-5xl font-bold'>
                                Calendar
                            </h1>
                            <p className='font-bold text-4xl relative z-10'>
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
                        <img className='absolute w-full xl:top-0 2xl:translate-y-15 z-0' src={divisor1} alt="" />
                    </div>
                     <div className='py-12 relative'>
                    <h1 className='font-bold text-3xl z-10 relative container mx-auto'>
                        Previous Concerts
                    </h1>
                    <img className='absolute w-full xl:top-0 z-0' src={divisor2} alt="" />
                    <div className='flex flex-col 2xl:flex-wrap 2xl:h-[700px] container mx-auto 2xl:gap-6 2xl:py-12'>
                       
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Calendar