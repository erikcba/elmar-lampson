import React, { useState } from 'react'
import Menu from '../../components/Menu'
import Navbar from '../../components/Navbar'
import divisor1 from '../../assets/divisor-mymusic1.png'
import divisor2 from '../../assets/divisor-mymusic2.png'
import dataEn from './MyMusicEn.json'
import dataDe from './MyMusicDe.json'
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
import { useTranslation } from 'react-i18next'

const MyMusic = () => {

    const [isOpen, setIsOpen] = useState(false)
    const { t, i18n } = useTranslation()
    const [contactOpen, setContactOpen] = useState(false)
    const [menuClosing, setMenuClosing] = useState(false)
    const [contactAnimating, setContactAnimating] = useState(false)

    const data = i18n.language === 'de' ? dataDe : dataEn

    const toggleMenu = () => {
        setMenuClosing(true)
        setTimeout(() => {
            setIsOpen(false)
            setMenuClosing(false)
            setContactOpen(false)
        }, 200)
    }

    const openContact = () => {
        setContactAnimating(true)
        setContactOpen(true)
        setTimeout(() => setContactAnimating(false), 500)
    }

    const closeContact = () => {
        setContactOpen(false)
        setIsOpen(false)
    }

    const openMenu = () => {
        setIsOpen(true)
        setContactOpen(false)
    }

    const mitad = Math.ceil(data.chamberWorks.length / 2);
    const primeraColumna = data.chamberWorks.slice(0, mitad - 1);
    const segundaColumna = data.chamberWorks.slice(mitad - 1);


    return (
        <div className=''>
            <Menu
                isOpen={isOpen}
                toggleMenu={toggleMenu}
                contactOpen={contactOpen}
                openContact={openContact}
                menuClosing={menuClosing}
                contactAnimating={contactAnimating}
                closeContact={closeContact}
            />
            <section className='xl:px-0 xl:pt-16 2xl:pt-32'>
                <div className='container mx-auto'>
                    <div className='relative container mx-auto px-6 2xl:px-0 xl:px-20 '>
                        <Navbar toggleMenu={openMenu} bgLang={'bg-sky-elmar text-white hover:bg-gray-100! hover:text-black!'} bgColor='bg-sky-elmar mix-blend-multiply text-white' />
                    </div>
                    <div className='flex flex-col xl:gap-10 gap-6 md:pt-24 pt-12 px-6 xl:px-20 2xl:px-0'>
                        <h1 className='text-sky md:text-5xl text-4xl font-bold'>
                            {t('myMusic')}
                        </h1>
                        <p className='font-bold md:text-4xl text-2xl'>
                            {t('catalogue')}
                        </p>
                    </div>
                </div>
                <div data-aos="fade-up" className='md:py-12 py-6 relative'>
                    <h1 className='font-bold md:text-3xl text-2xl z-10 relative container mx-auto px-6 xl:px-20 2xl:px-0'>
                        {t('orchestalWorks')}
                    </h1>
                    <img className='absolute w-full md:top-10 h-12 lg:top-10 2xl:top-4 top-2 2xl:translate-y-6 z-0' src={divisor1} alt="" />
                    <div className='grid grid-cols-1 sm:grid-cols-2 container mx-auto sm:gap-6 gap-4 sm:py-12 pt-6 px-6 xl:px-20 2xl:px-0'>
                        {
                            data.orchestralWorks.map((item, index) => (
                                <div key={index} className='flex flex-col sm:w-2/3 w-full 2xl:gap-1'>
                                    <h1 className='font-bold text-lg'>
                                        {item.titulo}
                                    </h1>
                                    <div className='flex flex-col'>
                                        {item.integrantes.map((nombre, idx) => (
                                            <p key={idx} className='text-md'>
                                                {nombre}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div data-aos="fade-up" className='sm:py-12 py-6 relative'>
                    <h1 className='font-bold sm:text-3xl text-2xl z-10 relative container mx-auto px-6 xl:px-20 2xl:px-0'>
                        {t('chamberMusic')}
                    </h1>
                    <img className='absolute w-full md:top-6 h-12 sm:h-16 2xl:top-0 top-2 2xl:translate-y-6 z-0' src={divisor2} alt="" />
                    <div className='grid grid-cols-1 sm:grid-cols-2 container mx-auto 2xl:gap-6 sm:py-12 px-6 pt-6 xl:px-20 2xl:px-0'>
                        <div className="flex flex-col gap-4">
                            {primeraColumna.map((item, index) => (
                                <div key={index} className="flex flex-col">
                                    <h1 className="font-bold text-lg">{item.titulo}</h1>
                                    <div className="flex flex-col">
                                        {item.integrantes.map((nombre, idx) => (
                                            <p key={idx} className="text-md">{nombre}</p>
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
                                            <p key={idx} className="text-md">{nombre}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className='sm:py-12 py-6 relative'>
                    <h1 className='font-bold sm:text-3xl text-2xl z-10 relative container mx-auto px-6 xl:px-20 2xl:px-0'>
                        {t('vocalMusic')}
                    </h1>
                    <img className='absolute w-full md:top-10 h-12 lg:top-10 2xl:top-4 top-3 2xl:translate-y-6 z-0' src={divisor1} alt="" />
                    <div className='grid sm:grid-cols-2 grid-cols-1 container mx-auto 2xl:gap-6 gap-4 sm:py-12 pt-6 px-6 xl:px-20 2xl:px-0'>
                        {
                            data.vocalMusic.map((item, index) => (
                                <div key={index} className='flex flex-col sm:w-2/3 w-full 2xl:gap-1'>
                                    <h1 className='font-bold text-lg'>
                                        {item.titulo}
                                    </h1>
                                    <div className='flex flex-col'>
                                        {item.integrantes.map((nombre, idx) => (
                                            <p key={idx} className='text-md'>
                                                {nombre}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div data-aos="fade-up" className='sm:py-12 py-6 relative'>
                    <h1 className='font-bold sm:text-3xl text-2xl z-10 relative container mx-auto px-6 xl:px-20 2xl:px-0'>
                        {t('musicTheatre')}
                    </h1>
                    <img className='absolute w-full md:top-6 h-12 sm:h-16 2xl:top-0 top-2 2xl:translate-y-6 z-0' src={divisor2} alt="" />
                    <div className='grid lg:grid-cols-2 grid-cols-1 2xl:h-[700px] container mx-auto 2xl:gap-0 gap-4 sm:py-12 pt-6 px-6 xl:px-20 2xl:px-0'>
                        {
                            data.musicTheatreAndOpera.map((item, index) => (
                                <div key={index} className='flex flex-col sm:gap-1'>
                                    <h1 className='font-bold text-lg'>
                                        {item.titulo}
                                    </h1>
                                    <div className='flex flex-col'>
                                        {item.integrantes.map((nombre, idx) => (
                                            <p key={idx} className='text-md'>
                                                {nombre}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div data-aos="fade-up" className='sm:py-12 py-6 relative'>
                    <h1 className='font-bold sm:text-3xl text-2xl z-10 relative container mx-auto px-6 xl:px-20 2xl:px-0'>
                        {t('writings')}
                    </h1>
                    <img className='absolute w-full md:top-10 h-12 lg:top-10 2xl:top-4 top-3 2xl:translate-y-6 z-0' src={divisor1} alt="" />
                    <div className='grid sm:grid-cols-2 grid-cols-1 container mx-auto 2xl:gap-0 sm:py-12 pt-6 px-6 xl:px-20 2xl:px-0'>
                        {
                            data.writings.map((item, index) => (
                                <div key={index} className='flex flex-col sm:w-2/3 w-full '>
                                    <div className='flex flex-col'>
                                        <p key={index} className='text-md'>
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
                <div data-aos="fade-up" className='container mx-auto flex flex-col xl:px-20 2xl:px-0 px-6'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-3xl'>
                            {t('cdRecordings')}
                        </h1>
                        <h2 className='font-bold text-2xl'>
                            {t('cdComposer')}
                        </h2>
                    </div>
                    <div className=''>
                        <div className='grid md:grid-cols-2 xl:grid-cols-5 grid-cols-1 gap-16 py-6 '>
                            <AlbumsCard img={img1} title={'Mysterienszenen'} colEgno={'- col legno 2012'} description={i18n.language === 'de'
                                ? 'Suite für Streichquintett, Flöte, Schlaginstrumente Solistenensemble des International Mahler Orchestra Dirigent: Yoel Gamzou'
                                : "Suite for String Quintet, Flute, Percussion Soloists' Ensemble of the International Mahler Orchestra Conductor:Yoel Gamzou"} />
                            <AlbumsCard img={img2} title={'Fadenkreuze'} colEgno={'- col legno 2004'} description={i18n.language === 'de'
                                ? '2. Streichquartett Halleluja für Solo-Cello Vier Stücke für Violine und Klavier Quatuor Danel, Wolfgang Sellner, Marc Danel, Jan Michiels'
                                : '2nd String Quartet Halleluja for Solo Cello Four Pieces for Violin and Piano Quatuor Danel, Wolfgang Sellner, Marc Danel, Jan Michiels'
                            } />
                            <AlbumsCard img={img3} title={'SymPHONIE'} colEgno={'- col legno 1998'} description={i18n.language === 'de'
                                ? 'Symphonie – Das Traumlied des Olaf Åsteson Musik für Klavier, Schlaginstrumente und Streicher Staatsphilharmonie Rheinland-Pfalz Solistin: Ulrike Bauer-Wirth, Klavier Dirigent: Elmar Lampson'
                                : 'Symphony – The Dream Song of Olaf Åsteson Music for Piano, Percussion and Strings State Philharmonic of Rhineland-Palatinate Soloist: Ulrike Bauer-Wirth, Piano Conductor: Elmar Lampson'
                            } />
                            <AlbumsCard img={img4} title={'subsTANZ'} colEgno={'- col legno 1996'} description={i18n.language === 'de'
                                ? 'Facetten für Klaviertrio Drei Klavierstücke TO AXION ESTI'
                                : 'Facets for Piano Trio Three Piano Pieces TO AXION ESTI'
                            } />
                            <AlbumsCard img={img5} title={i18n.language === 'de' ? 'Suite der Substanzen' : 'Suite of Substances'}
                                colEgno={''}
                                description={i18n.language === 'de'
                                    ? 'Volker Biesenbender, Vladimir Toncha, Ulrike Bauer-Wirth Solistenensemble der Orchester-Akademie Hamburg Dirigent: Elmar Lampson'
                                    : 'Volker Biesenbender, Vladimir Toncha, Ulrike Bauer-Wirth Soloists\' Ensemble of the Orchestra Academy Hamburg Conductor: Elmar Lampson'
                                } />
                        </div>
                        <h2 className='font-bold text-2xl'>
                            {t('cdConductor')}
                        </h2>
                        <div className='grid md:grid-cols-2 xl:grid-cols-5 grid-cols-1 gap-16 py-6 '>
                            <AlbumsCard img={img6} title={'Martin Scherber'} colEgno={'- col legno 2001'} description={i18n.language === 'de'
                                ? 'Dritte Symphonie Staatsphilharmonie Rheinland-Pfalz Dirigent: Elmar Lampson'
                                : 'Third Symphony State Philharmonic of Rhineland-Palatinate Conductor: Elmar Lampson'
                            } />
                            <AlbumsCard img={img7} title={'Alfred Schnittke'} colEgno={'- Sony Classical 1993'} description={i18n.language === 'de'
                                ? 'Violinsonate Nr. 1 Kanon Gratulationen Rondo Klavierquintett Orchester-Akademie Hamburg Dirigent: Elmar Lampson Mark Lubotsky, Irina Schnittke'
                                : 'Violin Sonata No. 1 Canon Congratulations Rondo Piano Quintet Orchestra Academy Hamburg Conductor: Elmar Lampson Mark Lubotsky, Irina Schnittke'
                            } />
                            <AlbumsCard img={img8} title={'Reinhard David Flender'} colEgno={'– col legno 1997'} description={i18n.language === 'de'
                                ? 'Aurora, Threnos IV, Pirkei Tehillim, Memorare Quatuor Danel, Orchester-Akademie Hamburg Dirigent: Elmar Lampson'
                                : 'Aurora, Threnos IV, Pirkei Tehillim, Memorare Quatuor Danel, Orchestra Academy Hamburg Conductor: Elmar Lampson'
                            } />
                            <div className='md:col-span-2 col-span-1 mx-auto my-auto gap-4 flex-col flex bg-white p-8'>
                                <h3 className='font-normal text-center text-2xl'>
                                    {i18n.language === 'de' ? 'Verfügbar auf' : 'Available on'}
                                </h3>
                                <img src={amazonImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default MyMusic
