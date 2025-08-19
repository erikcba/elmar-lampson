import React, { useEffect, useState } from 'react'
import Menu from '../../components/Menu'
import Navbar from '../../components/Navbar'
import MenuIcon from '../../components/icons/MenuIcon'
import divisor1 from '../../assets/divisor-mymusic1.png'
import divisor2 from '../../assets/divisor-mymusic2.png'
import TicketsCard from './TicketsCard'
import Footer from '../../components/Footer'
import axios from 'axios'
import ICAL from 'ical.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Calendar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)

    const { t, i18n } = useTranslation()

    const [contactOpen, setContactOpen] = useState(false)
    const [menuClosing, setMenuClosing] = useState(false)
    const [contactAnimating, setContactAnimating] = useState(false)

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


    useEffect(() => {
        axios.get('https://starlit-gaufre-2657cf.netlify.app/.netlify/functions/server')
            .then(response => {
                console.log('Respuesta completa del servidor:', response.data);

                // Si estamos recibiendo la respuesta de debug
                if (response.data.success !== undefined) {
                    console.log('Tipo de datos:', response.data.dataType);
                    console.log('Es array:', response.data.isArray);
                    console.log('Longitud:', response.data.dataLength);
                    console.log('Datos reales:', response.data.data);

                    const actualData = response.data.data;

                    // Procesar según la estructura real
                    if (Array.isArray(actualData) && actualData.length > 0) {
                        const parsedEvents = actualData.map((event, index) => {
                            console.log(`Evento ${index}:`, event);
                            return {
                                summary: event.title || event.name || event.summary || `Evento ${index + 1}`,
                                start: new Date(event.startDate || event.start || event.date),
                                end: new Date(event.endDate || event.end || event.date),
                                location: event.location || event.venue || event.address || '',
                                description: event.description || event.summary || event.notes || '',
                            }
                        });
                        setEvents(parsedEvents);
                    } else if (typeof actualData === 'object' && actualData !== null) {
                        // Si no es un array, pero es un objeto, podría tener los datos en alguna propiedad
                        console.log('Propiedades del objeto:', Object.keys(actualData));

                        // Buscar propiedades que podrían contener los eventos
                        const possibleArrays = Object.keys(actualData).filter(key =>
                            Array.isArray(actualData[key])
                        );
                        console.log('Posibles arrays encontrados:', possibleArrays);

                        if (possibleArrays.length > 0) {
                            const eventsArray = actualData[possibleArrays[0]];
                            const parsedEvents = eventsArray.map((event, index) => ({
                                summary: event.title || event.name || event.summary || `Evento ${index + 1}`,
                                start: new Date(event.startDate || event.start || event.date),
                                end: new Date(event.endDate || event.end || event.date),
                                location: event.location || event.venue || '',
                                description: event.description || event.summary || '',
                            }));
                            setEvents(parsedEvents);
                        }
                    }
                } else {
                    // Respuesta directa (sin debug wrapper)
                    const jsonData = response.data;
                    console.log('Datos directos:', jsonData);

                    if (Array.isArray(jsonData) && jsonData.length > 0) {
                        const parsedEvents = jsonData.map((event, index) => ({
                            summary: event.title || event.name || event.summary || `Evento ${index + 1}`,
                            start: new Date(event.startDate || event.start || event.date),
                            end: new Date(event.endDate || event.end || event.date),
                            location: event.location || event.venue || '',
                            description: event.description || event.summary || '',
                        }));
                        setEvents(parsedEvents);
                    }
                }

                setLoading(false);
            })
            .catch(err => {
                console.error('Error completo:', err);
                console.error('Response data:', err.response?.data);
                console.error('Response status:', err.response?.status);
                setLoading(false);
            });
    }, [])

    useEffect(() => {
        if (!loading) {
            AOS.refresh()
        }
    }, [loading])


    return (
        <div>
            <Menu
                isOpen={isOpen}
                toggleMenu={toggleMenu}
                contactOpen={contactOpen}
                openContact={openContact}
                menuClosing={menuClosing}
                contactAnimating={contactAnimating}
                closeContact={closeContact}
            />
            <section >
                <div className=' xl:pt-16 2xl:pt-32 pt-0'>
                    <div className='container mx-auto px-6 2xl:px-0 xl:px-20'>
                        <div className='relative  '>
                            <Navbar toggleMenu={openMenu} bgLang={'bg-sky-elmar text-white hover:bg-gray-100! hover:text-black!'} bgColor='bg-sky-elmar mix-blend-multiply text-white' />
                        </div>
                    </div>
                    <div className='relative z-10  md:pb-12  pt-12 xl:px-0'>
                        <div className=' flex flex-col md:gap-8 gap-4 z-10'>
                            <h1 className='container mx-auto xl:pt-14 xl:px-20 2xl:px-0 px-6 text-sky md:text-5xl text-3xl font-bold'>
                                {t('calendar')}
                            </h1>
                            <img data-aos="fade-up" className='absolute w-full md:top-30 md:h-14 xl:top-44 2xl:top-40 xl:h-fit top-22 h-12  z-0' src={divisor1} alt="" />
                            <p data-aos="fade-up" className='font-bold md:text-4xl px-6 text-2xl relative z-10 container mx-auto xl:px-20 2xl:px-0'>
                                {t('upcomingConcerts')}
                            </p>
                            {
                                loading ? (
                                    <div data-aos="fade-up" className='flex justify-center items-center h-64'>
                                        <p className='text-lg font-semibold'>
                                            Loading events...
                                        </p>
                                    </div>
                                ) : (
                                    <div data-aos="fade-in" className='flex flex-col gap-8 pt-2 px-6 container mx-auto xl:px-20 2xl:px-0'>
                                        {events.map((ev, index) => (
                                            <TicketsCard

                                                key={index}
                                                date={ev.start ? ev.start.toLocaleDateString('de-DE', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric'
                                                }) : ''}
                                                place={ev.location}
                                                title={ev.summary}
                                                subtitle={''}
                                                director={''}
                                                description={ev.description}
                                                musicDirector={''}
                                                stageDirector={''}
                                            />
                                        ))}
                                        {/*  
                                <TicketsCard date={'24 May 2025'} place={'Theater Bremen'} title={'Premiere of the opera Wellen'} subtitle={'Comissioned by Theater Bremen'} director={'Opera by Elmar Lampson'} description={'Text by Julia Spinola after Eduard von Keyserling, In German with German surtitles'} musicDirector={'Yoel Gamzou'} stageDirector={'Philipp Rosendahl'} />
                                <TicketsCard date={'27 May 2025, 7:00PM'} place={'Theater Bremen'} title={'Wellen'} />
                                <TicketsCard date={'5 June 2025, 7:00PM'} place={'Theater Bremen'} title={'Wellen'} />
                                <TicketsCard date={'7 June 2025, 7:00PM'} place={'Theater Bremen'} title={'Wellen'} />
                                <TicketsCard date={'13 June 2025, 7:00PM'} place={'Theater Bremen'} title={'Wellen'} />
                                <TicketsCard date={'15 June 2025, 7:00PM'} place={'Theater Bremen'} title={'Wellen'} />
                                <TicketsCard date={'18 June 2025, 7:00PM'} place={'Theater Bremen'} title={'Wellen'} />
                                <TicketsCard date={'8 October 2025'} place={'Schenzhen Concert Hal'} title={'Chamber and ensemble works'} />
                                <TicketsCard date={'Summer 2026'} place={'Schenzhen Concert Hal'} title={'World Premiere: Sea Symphony Parts I, II and II'} subtitle={'Commissioned by Theater Bremen'} />
                                */}
                                    </div>
                                )}

                        </div>
                    </div>
                    <div data-aos="fade-up" className='md:py-6 2xl:py-10 py-12 relative'>
                        <h1 className='font-bold xl:text-3xl 2xl:text-4xl text-2xl z-10 relative container mx-auto mb-4 px-6 xl:px-20 2xl:px-0'>
                            {t('previousConcerts')}
                        </h1>
                        <img className='absolute w-full sm:-top-1 top-5 xl:h-fit h-16 z-0' src={divisor2} alt="" />
                        <div className='flex flex-col container mx-auto 2xl:gap-6 gap-4 2xl:py-12 px-6 xl:px-20 2xl:px-0'>
                            <div className='flex flex-col gap-0'>
                                <div className='flex flex-col mb-3'>
                                    <h3 className='xl:text-2xl text-xl font-semibold'>
                                        {i18n.language === 'de'
                                            ? '18. Mai 2025, 11:00 Uhr'
                                            : '18 May 2025, 11:00AM'
                                        }
                                    </h3>
                                    <p className='text-sm font-light'>
                                        Theater Bremen
                                    </p>
                                    <h1 className='xl:text-3xl text-2xl font-bold'>
                                        {i18n.language === 'de'
                                            ? 'Matinee zur Opernpremiere Wellen'
                                            : 'Matinee for the opera Wellen premiere'
                                        }
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

                            {/* Evento 2 - Sea Symphony Part II */}
                            <div className='flex flex-col gap-0'>
                                <div className='flex flex-col mb-3'>
                                    <h3 className='xl:text-2xl text-xl font-semibold'>
                                        {i18n.language === 'de'
                                            ? '26. Oktober 2024'
                                            : '26 October 2024'
                                        }
                                    </h3>
                                    <p className='text-sm font-light'>
                                        Shenzhen Concert Hall
                                    </p>
                                    <h1 className='xl:text-3xl text-2xl font-bold'>
                                        {i18n.language === 'de'
                                            ? 'Weltpremiere: Sea Symphony Part II – 1. Dreams and Inklings, 2. Eerie Morning (2024)'
                                            : 'World Premiere: Sea Symphony Part II – 1. Dreams and Inklings, 2. Eerie Morning (2024)'
                                        }
                                    </h1>
                                    <p className='text-sm font-light'>
                                        {i18n.language === 'de'
                                            ? 'Auftragswerk des Shenzhen Symphony Orchestra'
                                            : 'Commissioned by the Shenzhen Symphony Orchestra'
                                        }
                                    </p>
                                </div>
                                <div className='flex flex-col gap-0 mb-2'>
                                    <p className='text-md font-semibold'>
                                        Shenzhen Symphony Orchestra
                                    </p>
                                    <p className='text-sm font-light'>
                                        {i18n.language === 'de'
                                            ? 'Dirigent: Daye Lin'
                                            : 'Conductor: Daye Lin'
                                        }
                                    </p>
                                </div>
                            </div>

                            {/* Evento 3 - Sea Symphony Part I */}
                            <div className='flex flex-col gap-0'>
                                <div className='flex flex-col mb-3'>
                                    <h3 className='xl:text-2xl text-xl font-semibold'>
                                        {i18n.language === 'de'
                                            ? '8. Dezember 2023'
                                            : '8 December 2023'
                                        }
                                    </h3>
                                    <p className='text-sm font-light'>
                                        Shenzhen Concert Hall
                                    </p>
                                    <h1 className='xl:text-3xl text-2xl font-bold'>
                                        {i18n.language === 'de'
                                            ? 'Weltpremiere: Sea Symphony Part I – The Stormy Sea (2020–2023)'
                                            : 'World Premiere: Sea Symphony Part I – The Stormy Sea (2020–2023)'
                                        }
                                    </h1>
                                    <p className='text-sm font-light'>
                                        {i18n.language === 'de'
                                            ? 'Auftragswerk des Shenzhen Symphony Orchestra'
                                            : 'Commissioned by the Shenzhen Symphony Orchestra'
                                        }
                                    </p>
                                </div>
                                <div className='flex flex-col gap-0 mb-2'>
                                    <p className='text-md font-semibold'>
                                        Shenzhen Symphony Orchestra
                                    </p>
                                    <p className='text-sm font-light'>
                                        {i18n.language === 'de'
                                            ? 'Dirigent: Daye Lin'
                                            : 'Conductor: Daye Lin'
                                        }
                                    </p>
                                </div>
                            </div>

                            {/* Evento 4 - Music for St. Michaelis */}
                            <div className='flex flex-col gap-0'>
                                <div className='flex flex-col mb-3'>
                                    <h3 className='xl:text-2xl text-xl font-semibold'>
                                        {i18n.language === 'de'
                                            ? '17. September 2023'
                                            : '17 September 2023'
                                        }
                                    </h3>
                                    <p className='text-sm font-light'>
                                        {i18n.language === 'de'
                                            ? 'Das Ernst Deutsch Theater, Hamburg'
                                            : 'The Ernst Deutsch Theater, Hamburg'
                                        }
                                    </p>
                                    <h1 className='xl:text-3xl text-2xl font-bold'>
                                        {i18n.language === 'de'
                                            ? 'Musik für Sankt Michaelis'
                                            : 'Music for St. Michaelis'
                                        }
                                    </h1>
                                    <p className='text-sm font-semibold'>
                                        {i18n.language === 'de'
                                            ? <>
                                                Aufführung anlässlich der Gustaf Gründgens Preisverleihung <br />
                                                Philharmonisches Staatsorchester Hamburg
                                            </>
                                            : <>
                                                Performance on the occasion of the Gustaf Gründgens Prize ceremony <br />
                                                Philharmonic State Orchestra Hamburg
                                            </>
                                        }
                                    </p>
                                    <p className='text-sm font-light'>
                                        {i18n.language === 'de'
                                            ? 'Dirigent: Kent Nagano'
                                            : 'Conductor: Kent Nagano'
                                        }
                                    </p>
                                </div>
                                <div className='flex flex-col gap-0 mb-2'>
                                    <p className='text-sm font-light'>
                                        {i18n.language === 'de'
                                            ? 'Link zum Artikel (Deutsch)'
                                            : 'Link to article (German)'
                                        }
                                    </p>
                                </div>
                            </div>

                            {/* Evento 5 - Prayers at the Sea */}
                            <div className='flex flex-col gap-0'>
                                <div className='flex flex-col mb-3'>
                                    <h3 className='xl:text-2xl text-xl font-semibold'>
                                        {i18n.language === 'de'
                                            ? '4. Oktober 2020'
                                            : '4 October 2020'
                                        }
                                    </h3>
                                    <h1 className='xl:text-3xl text-2xl font-bold'>
                                        {i18n.language === 'de'
                                            ? <>
                                                Weltpremiere. Gebete am Meer (2017–2020) <br />
                                                für Chor und Schlaginstrumente (2)
                                            </>
                                            : <>
                                                World Premiere. Prayers at the Sea (2017–2020) <br />
                                                for Choir and Percussion (2)
                                            </>
                                        }
                                    </h1>
                                    <p className='text-sm font-light'>
                                        {i18n.language === 'de'
                                            ? 'Auftragswerk des Philharmonischen Staatsorchesters Hamburg'
                                            : 'Commissioned by the Philharmonic State Orchestra Hamburg'
                                        }
                                    </p>
                                </div>
                                <div className='flex flex-col gap-0 mb-2'>
                                    <p className='text-sm font-semibold'>
                                        {i18n.language === 'de'
                                            ? <>
                                                Weltpremiere: Lausitzfestival <br />
                                                Europa Chorakademie Görlitz <br />
                                                Schlagzeuger des Klangforum Wien
                                            </>
                                            : <>
                                                World Premiere: Lausitz Festival <br />
                                                Europa Chorakademie Görlitz <br />
                                                Percussionists of Klangforum Wien
                                            </>
                                        }
                                    </p>
                                    <p className='text-sm font-light'>
                                        {i18n.language === 'de'
                                            ? 'Dirigent: Sylvain Cambreling'
                                            : 'Conductor: Sylvain Cambreling'
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Calendar