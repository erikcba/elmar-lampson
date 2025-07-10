import React, { useState } from 'react'
import Menu from '../../components/Menu'
import MenuIcon from '../../components/icons/MenuIcon'
import Navbar from '../../components/Navbar'
import divisor1 from '../../assets/divisor-mymusic1.png'
import divisor2 from '../../assets/divisor-mymusic2.png'
import data from './MyMusic.json'
import img1 from '../../assets/mysterienszenen.png'
import img2 from '../../assets/fadenkreuze.png'
import img3 from '../../assets/symphonie.png'
import img4 from '../../assets/substanz.png'
import img5 from '../../assets/suitOfSubstances.png'
import img6 from '../../assets/martinSherber.png'
import img7 from '../../assets/alfredSchnittke.png'
import img8 from '../../assets/reinhard.png'
import amazonImg from '../../assets/amazon.png'
import AlbumsCard from './AlbumsCard'
import Footer from '../../components/Footer'

const MyMusic = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


    console.log(data.writings)

    return (
        <div className=''>
            <Menu toggleMenu={toggleMenu} isOpen={isOpen} />
            <section>
                <div className='container mx-auto'>
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
                </div>
                <div className='py-12 relative'>
                    <h1 className='font-bold text-3xl z-10 relative container mx-auto'>
                        Orchestal Works
                    </h1>
                    <img className='absolute w-full xl:top-0 2xl:translate-y-6 z-0' src={divisor1} alt="" />
                    <div className='grid grid-cols-2 container mx-auto 2xl:gap-6 2xl:py-12'>
                        {
                            data.orchestralWorks.map((item, index) => (
                                <div key={index} className='flex flex-col w-2/3 2xl:gap-1'>
                                    <h1 className='font-bold text-lg'>
                                        {item.titulo}
                                    </h1>
                                    <div className='flex flex-col'>
                                        {item.integrantes.map((nombre, idx) => (
                                            <p key={idx} className='text-base'>
                                                {nombre}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='py-12 relative'>
                    <h1 className='font-bold text-3xl z-10 relative container mx-auto'>
                        Chamber Music and Solo Works
                    </h1>
                    <img className='absolute w-full xl:top-0 2xl:translate-y-1 z-0' src={divisor2} alt="" />
                    <div className='flex flex-col 2xl:flex-wrap 2xl:h-[700px] container mx-auto 2xl:gap-6 2xl:py-12'>
                        {
                            data.chamberWorks.map((item, index) => (
                                <div key={index} className='flex flex-col 2xl:gap-1'>
                                    <h1 className='font-bold text-lg'>
                                        {item.titulo}
                                    </h1>
                                    <div className='flex flex-col'>
                                        {item.integrantes.map((nombre, idx) => (
                                            <p key={idx} className='text-base'>
                                                {nombre}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='py-12 relative'>
                    <h1 className='font-bold text-3xl z-10 relative container mx-auto'>
                        Vocal Music
                    </h1>
                    <img className='absolute w-full xl:top-0 2xl:translate-y-6 z-0' src={divisor1} alt="" />
                    <div className='grid grid-cols-2 container mx-auto 2xl:gap-6 2xl:py-12'>
                        {
                            data.vocalMusic.map((item, index) => (
                                <div key={index} className='flex flex-col w-2/3 2xl:gap-1'>
                                    <h1 className='font-bold text-lg'>
                                        {item.titulo}
                                    </h1>
                                    <div className='flex flex-col'>
                                        {item.integrantes.map((nombre, idx) => (
                                            <p key={idx} className='text-base'>
                                                {nombre}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='py-12 relative'>
                    <h1 className='font-bold text-3xl z-10 relative container mx-auto'>
                        Music Theatre and Opera
                    </h1>
                    <img className='absolute w-full xl:top-0 2xl:translate-y-1 z-0' src={divisor2} alt="" />
                    <div className='flex flex-col 2xl:flex-wrap 2xl:h-[700px] container mx-auto 2xl:gap-6 2xl:py-12'>
                        {
                            data.musicTheatreAndOpera.map((item, index) => (
                                <div key={index} className='flex flex-col 2xl:gap-1'>
                                    <h1 className='font-bold text-lg'>
                                        {item.titulo}
                                    </h1>
                                    <div className='flex flex-col'>
                                        {item.integrantes.map((nombre, idx) => (
                                            <p key={idx} className='text-base'>
                                                {nombre}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='py-12 relative'>
                    <h1 className='font-bold text-3xl z-10 relative container mx-auto'>
                        Writings
                    </h1>
                    <img className='absolute w-full xl:top-0 2xl:translate-y-6 z-0' src={divisor1} alt="" />
                    <div className='grid grid-cols-2 container mx-auto 2xl:gap-0 2xl:py-12'>
                        {
                            data.writings.map((item, index) => (
                                <div key={index} className='flex flex-col w-2/3 '>
                                    <div className='flex flex-col'>
                                        <p key={index} className='text-base'>
                                            {item}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className='bg-gray-200 py-12'>
                <div className='container mx-auto flex flex-col'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-3xl'>
                            CD Recordings
                        </h1>
                        <h2 className='font-bold text-2xl'>
                            Composer: Elmar Lampson
                        </h2>
                    </div>
                    <div className='grid grid-cols-5 gap-16 py-6'>
                        <AlbumsCard img={img1} title={'Mysterienszenen'} colEgno={'- col legno 2012'} description={'Suite for String Quintet, Flute, PercussionSoloists’ Ensemble of the International Mahler Orchestra Conductor: Yoel Gamzou'} />
                        <AlbumsCard img={img2} title={'Fadenkreuze'} colEgno={'- col legno 2004'} description={'2nd String Quartet Halleluja for Solo Cello Four Pieces for Violin and Piano Quatuor Danel, Wolfgang Sellner, Marc Danel, Jan Michiels'} />
                        <AlbumsCard img={img3} title={'SymPHONIE'} colEgno={'- col legno 1998'} description={'Symphony – The Dream Song of Olaf Åsteson Music for Piano, Percussion and Strings State Philharmonic of Rhineland-Palatinate Soloist: Ulrike Bauer-Wirth, Piano Conductor: Elmar Lampson'} />
                        <AlbumsCard img={img4} title={'subsTANZ'} colEgno={'- col legno 1996'} description={'Facets for Piano Trio Three Piano Pieces TO AXION ESTI'} />
                        <AlbumsCard img={img5} title={'Suite of Substances'} colEgno={''} description={'Volker Biesenbender, Vladimir Toncha, Ulrike Bauer-Wirth Soloists’ Ensemble of the Orchestra Academy Hamburg Conductor: Elmar Lampson'} />
                    </div>
                    <div className='grid grid-cols-5 gap-16 py-6'>
                        <AlbumsCard img={img6} title={'Martin Scherber'} colEgno={'- col legno 2001'} description={'Third Symphony State Philharmonic of Rhineland-Palatinate Conductor: Elmar Lampson'} />
                        <AlbumsCard img={img7} title={'Alfred Schnittke'} colEgno={'- Sony Classical 1993'} description={'Violin Sonata No. 1 Canon Congratulations Rondo Piano Quintet Orchestra Academy Hamburg Conductor: Elmar Lampson Mark Lubotsky, Irina Schnittke'} />
                        <AlbumsCard img={img8} title={'Reinhard David Flender'} colEgno={'– col legno 1997'} description={'Aurora, Threnos IV, Pirkei Tehillim, Memorare Quatuor Danel, Orchestra Academy Hamburg Conductor: Elmar Lampson'} />  
                        <div className='col-span-2 mx-auto my-auto gap-4 flex-col flex bg-white p-8'>
                            <h3 className='font-normal text-center text-2xl'>
                                Available in
                            </h3>
                            <img src={amazonImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default MyMusic
