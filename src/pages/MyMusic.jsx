import React, { useState } from 'react'
import Menu from '../components/Menu'
import MenuIcon from '../components/icons/MenuIcon'
import Navbar from '../components/Navbar'
import divisor1 from '../assets/divisor-mymusic1.png'


const MyMusic = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className=''>
            <Menu toggleMenu={toggleMenu} isOpen={isOpen} />
            <section className='container mx-auto'>
                <div className='relative'>
                    <Navbar toggleMenu={toggleMenu} bgLang={'bg-sky-elmar text-white'} bgColor='bg-sky-elmar mix-blend-multiply text-white' />
                    <MenuIcon color={"white"} onClick={toggleMenu} className="absolute left-1/4 top-1/7 cursor-pointer" />
                </div>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-sky text-5xl font-bold'>
                        My music
                    </h1>
                    <p className='font-bold text-4xl'>
                        Catalogue of Works - Compositions
                    </p>
                </div>
                <div className='py-12 relative'>
                    <h1 className='font-bold text-3xl z-10 relative'>
                        Orchestal Works
                    </h1>
                    <img className='absolute w-full top-1/4 z-0' src={divisor1} alt="" />
                </div> 
            </section>
        </div>
    )
}

export default MyMusic
