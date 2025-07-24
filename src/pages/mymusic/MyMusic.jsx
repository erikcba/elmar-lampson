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

    const mitad = Math.ceil(data.chamberWorks.length / 2);
    const primeraColumna = data.chamberWorks.slice(0, mitad - 1);
    const segundaColumna = data.chamberWorks.slice(mitad - 1 );


    return (
        <div className=''>
            <Menu toggleMenu={toggleMenu} isOpen={isOpen} />
            <section className='xl:px-0 xl:pt-32'>
                <div className='container mx-auto px-6 '>
                    <div className='relative '>
                        <Navbar toggleMenu={toggleMenu} bgLang={'bg-sky-elmar text-white'} bgColor='bg-sky-elmar mix-blend-multiply text-white' />
                    </div>
                    <div className='flex flex-col gap-6 md:pt-24 pt-12'>
                        <h1 className='text-sky md:text-5xl text-4xl font-bold'>
                            My music
                        </h1>
                        <p className='font-bold md:text-4xl text-2xl'>
                            Catalogue of Works - Compositions
                        </p>
                    </div>
                </div>
                <div className='md:py-12 py-6 relative'>
                    <h1 className='font-bold md:text-3xl text-2xl z-10 relative container mx-auto px-6 sm:px-0'>
                        Orchestal Works
                    </h1>
                    <img className='absolute w-full xl:top-0 2xl:translate-y-6 z-0' src={divisor1} alt="" />
                    <div className='grid grid-cols-1 sm:grid-cols-2 container mx-auto sm:gap-6 gap-4 sm:py-12 pt-6 px-6 sm:px-0'>
                        {
                            data.orchestralWorks.map((item, index) => (
                                <div key={index} className='flex flex-col sm:w-2/3 w-full 2xl:gap-1'>
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
                <div className='sm:py-12 py-6 relative'>
                    <h1 className='font-bold sm:text-3xl text-2xl z-10 relative container mx-auto px-6 sm:px-0'>
                        Chamber Music and Solo Works
                    </h1>
                    <img className='absolute w-full xl:top-0 2xl:translate-y-1 z-0' src={divisor2} alt="" />
                    <div className='grid grid-cols-1 sm:grid-cols-2 container mx-auto 2xl:gap-6 sm:py-12 pt-6 px-6 sm:px-0'>
                        <div className="flex flex-col gap-4">
                            {primeraColumna.map((item, index) => (
                                <div key={index} className="flex flex-col">
                                    <h1 className="font-bold text-lg">{item.titulo}</h1>
                                    <div className="flex flex-col">
                                        {item.integrantes.map((nombre, idx) => (
                                            <p key={idx} className="text-base">{nombre}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4">
                            {segundaColumna.map((item, index) => (
                                <div key={index} className="flex flex-col">
                                    <h1 className="font-bold text-lg">{item.titulo}</h1>
                                    <div className="flex flex-col">
                                        {item.integrantes.map((nombre, idx) => (
                                            <p key={idx} className="text-base">{nombre}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='sm:py-12 py-6 relative'>
                    <h1 className='font-bold text-3xl z-10 relative container mx-auto px-6 sm:px-0'>
                        Vocal Music
                    </h1>
                    <img className='absolute w-full xl:top-0 2xl:translate-y-6 z-0' src={divisor1} alt="" />
                    <div className='grid sm:grid-cols-2 grid-cols-1 container mx-auto 2xl:gap-6 gap-4 sm:py-12 pt-6 px-6 sm:px-0'>
                        {
                            data.vocalMusic.map((item, index) => (
                                <div key={index} className='flex flex-col sm:w-2/3 w-full 2xl:gap-1'>
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
                <div className='sm:py-12 py-6 relative'>
                    <h1 className='font-bold text-3xl z-10 relative container mx-auto px-6 sm:px-0'>
                        Music Theatre and Opera
                    </h1>
                    <img className='absolute w-full xl:top-0 2xl:translate-y-1 z-0' src={divisor2} alt="" />
                    <div className='flex flex-col sm:flex-wrap 2xl:h-[700px] container mx-auto 2xl:gap-6 gap-4 sm:py-12 pt-6 px-6 sm:px-0'>
                        {
                            data.musicTheatreAndOpera.map((item, index) => (
                                <div key={index} className='flex flex-col sm:gap-1'>
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
                <div className='sm:py-12 py-6 relative'>
                    <h1 className='font-bold text-3xl z-10 relative container mx-auto px-6 sm:px-0'>
                        Writings
                    </h1>
                    <img className='absolute w-full xl:top-0 2xl:translate-y-6 z-0' src={divisor1} alt="" />
                    <div className='grid sm:grid-cols-2 grid-cols-1 container mx-auto 2xl:gap-0 sm:py-12 pt-6 px-6 sm:px-0'>
                        {
                            data.writings.map((item, index) => (
                                <div key={index} className='flex flex-col sm:w-2/3 w-full '>
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
                <div className='container mx-auto flex flex-col md:px-0 px-6'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-3xl'>
                            CD Recordings
                        </h1>
                        <h2 className='font-bold text-2xl'>
                            Composer: Elmar Lampson
                        </h2>
                    </div>
                    <div className='grid md:grid-cols-5 grid-cols-1 gap-16 py-6 '>
                        <AlbumsCard img={img1} title={'Mysterienszenen'} colEgno={'- col legno 2012'} description={'Suite for String Quintet, Flute, PercussionSoloists’ Ensemble of the International Mahler Orchestra Conductor: Yoel Gamzou'} />
                        <AlbumsCard img={img2} title={'Fadenkreuze'} colEgno={'- col legno 2004'} description={'2nd String Quartet Halleluja for Solo Cello Four Pieces for Violin and Piano Quatuor Danel, Wolfgang Sellner, Marc Danel, Jan Michiels'} />
                        <AlbumsCard img={img3} title={'SymPHONIE'} colEgno={'- col legno 1998'} description={'Symphony – The Dream Song of Olaf Åsteson Music for Piano, Percussion and Strings State Philharmonic of Rhineland-Palatinate Soloist: Ulrike Bauer-Wirth, Piano Conductor: Elmar Lampson'} />
                        <AlbumsCard img={img4} title={'subsTANZ'} colEgno={'- col legno 1996'} description={'Facets for Piano Trio Three Piano Pieces TO AXION ESTI'} />
                        <AlbumsCard img={img5} title={'Suite of Substances'} colEgno={''} description={'Volker Biesenbender, Vladimir Toncha, Ulrike Bauer-Wirth Soloists’ Ensemble of the Orchestra Academy Hamburg Conductor: Elmar Lampson'} />
                    </div>
                    <div className='grid md:grid-cols-5 grid-cols-1 gap-16 py-6 '>
                        <AlbumsCard img={img6} title={'Martin Scherber'} colEgno={'- col legno 2001'} description={'Third Symphony State Philharmonic of Rhineland-Palatinate Conductor: Elmar Lampson'} />
                        <AlbumsCard img={img7} title={'Alfred Schnittke'} colEgno={'- Sony Classical 1993'} description={'Violin Sonata No. 1 Canon Congratulations Rondo Piano Quintet Orchestra Academy Hamburg Conductor: Elmar Lampson Mark Lubotsky, Irina Schnittke'} />
                        <AlbumsCard img={img8} title={'Reinhard David Flender'} colEgno={'– col legno 1997'} description={'Aurora, Threnos IV, Pirkei Tehillim, Memorare Quatuor Danel, Orchestra Academy Hamburg Conductor: Elmar Lampson'} />
                        <div className='md:col-span-2 col-span-1 mx-auto my-auto gap-4 flex-col flex bg-white p-8'>
                            <h3 className='font-normal text-center text-2xl'>
                                Available on
                            </h3>
                            <img src={amazonImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default MyMusic
