import React, { useState } from 'react'
import MenuIcon from '../components/icons/MenuIcon'
import Menu from '../components/Menu'
import logoBlanco from '../assets/logoWhite.png'
import vectorNews from '../assets/news-title.png'
import NewsComponent from '../components/NewsComponent'
import Footer from '../components/Footer'
import vector1 from '../assets/Vector.png'
import vector2 from '../assets/vector2.png'

const News = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='overflow-hidden'>
            <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
            <section id='hero' className='bg-hero-news relative'>
                <div className='container mx-auto xl:pt-32'>
                    <div className='relative'>
                        <img src={logoBlanco} alt="" />
                        <MenuIcon color={"white"} onClick={toggleMenu} className="absolute left-1/4 top-1/7 cursor-pointer" />
                        <span className="absolute left-2/7 top-1/7  text-xl font-bold text-fuchsia-975 bg-white rounded-full py-3 px-2 leading-none cursor-pointer">
                            DE
                        </span>
                    </div>
                </div>
                <img src={vectorNews} className='absolute bottom-25' alt="" />
                <div className='container mx-auto'>
                    <h1 className='text-white  text-5xl font-bold absolute bottom-10'>
                        News
                    </h1>
                </div>
            </section>
            <section className='container mx-auto py-16 flex flex-col gap-16 relative'>
                <div className='h-full'>
                    <img className='absolute top-5 -left-1/7 -rotate-1 ' src={vector1} alt="" />
                    <img className='absolute top-0 -left-1/12 h-full w-1/12 -translate-x-9' src={vector2} alt="" />
                </div>
                <NewsComponent title={'The Reviews Are In! '} date={'4.06.2025'} description={<>
                    The premiere of Elmar Lampson’s newest opera, Wellen, was warmly received by both critics and audiences. Reviewers praised the “iridescent score” (Andreas Schnell, Kreiszeitung{" "}
                    <a href="https://www.kreiszeitung.de/kultur/der-untergang-wellen-in-bremen-93755869.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        https://www.kreiszeitung.de/kultur/der-untergang-wellen-in-bremen-93755869.html
                    </a>{" "}
                    with “passages of unearthly beauty” (Wolfgang Denker, Der Opernfreund{" "}
                    <a href="https://deropernfreund.de/theater-bremen/bremen-wellen-elmar-lampson/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        https://deropernfreund.de/theater-bremen/bremen-wellen-elmar-lampson/
                    </a>
                    ). “Elmar Lampson’s music remains constantly in flow, carrying the action forward” (Christine Gorny, Bremen Zwei,{" "}
                    <a href="https://www.bremenzwei.de/themen/oper-wellen-theater-bremen-100.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        https://www.bremenzwei.de/themen/oper-wellen-theater-bremen-100.html
                    </a>
                    )—“Lampson’s music holds nothing back: it moves between wild and tender, between major and minor, with numerous pentatonic touches and hugely demanding ensemble sections. . . . it repeatedly manages to create completely unexpected constellations and confrontations. The percussion formations positioned on both sides of the stage are thrilling” (Ute Schalz-Laurenze Neue Musikzeitung).
                    The opera is playing at Theater Bremen until June 18—get your tickets here so you don’t miss out!{" "}
                    <a href="https://www.theaterbremen.de/de_DE/programm/wellen.1303395#events" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        https://www.theaterbremen.de/de_DE/programm/wellen.1303395#events
                    </a>
                    .
                </>} />
                <NewsComponent title={'For Elmar Lampson, Composing Doesn’t Feel Like Work'} date={'23.05.2025'} description={
                    <>
                        The composer delves into his most recent opera in an exclusive interview for Bremen Zwei.{" "}
                        <a href="https://www.bremenzwei.de/audios/elmar-lampson-komponist-wellen-oper-theater-bremen-100.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                            https://www.bremenzwei.de/audios/elmar-lampson-komponist-wellen-oper-theater-bremen-100.html
                        </a>
                    </>
                } />
                <NewsComponent title={'Waves to Receive Its World Premiere at Theater Bremen'} date={'20.05.2025'} description={
                    <>
                        Elmar Lampson's new opera, with a libretto by Julia Spinola based on Eduard von Keyserling’s novel, premieres at Theater am Goetheplatz in Bremen—the venue that commissioned the work. The production runs from May 24 to June 18, directed by Philipp Rosendahl with musical direction by Yoel Gamzou. Set in a Baltic Sea resort on the eve of World War I, Waves explores the collapse of utopian ideals through Keyserling’s ironic lens of social critique. Check out the programme at Theater Bremen’s website. {" "}
                        <a href="http://www.theaterbremen.de/de_DE/programm/wellen.1303395#events" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline" >
                            https://www.theaterbremen.de/de_DE/programm/wellen.1303395#events
                        </a>
                    </>
                } />
                <NewsComponent title={'SZSO to Premiere Elmar Lampson’s Work'} date={'23.10.2024'} description={
                    <>
                        The Shenzhen Symphony Orchestra, under the baton of Lin Daye, will premiere Elmar Lampson’s “Stormy Sea No. 2” at the Shenzhen Concert Hall. This new symphony, commissioned by the orchestra, follows the debut of the first “Stormy Sea” installment in December 2023. While the original piece captured the ocean’s raw power, this sequel explores the introspective emotions of beachgoers at sunrise.{" "}
                        <a href="https://www.eyeshenzhen.com/content/2024-10/23/content_31290169.html" target='_blank' rel='noopener noreferrer' className='text-blue-600 underline' >
                            https://www.eyeshenzhen.com/content/2024-10/23/content_31290169.html
                        </a>
                    </>
                } />
                <NewsComponent title={'President of the Hamburg University of Music and Drama Given Ceremonial Farewell'} date={'4.10.2022'} description={
                    <>
                        Professor Elmar Lampson was formally honoured at a ceremony marking the end of his 18-year tenure as President of the Hochschule für Musik und Theater Hamburg (HfMT). Under his leadership since 2004, the university underwent significant transformation, including the establishment of the Jazz Hall and new facilities for the Theatre Academy and the Institute for Culture and Media Management. The farewell event featured tributes from prominent figures such as Kent Nagano and included the premiere of a harp concerto composed for the occasion.{" "}
                        <a href="https://www.welt.de/regionales/hamburg/article169646409/Das-groesste-kulturelle-Ereignis-seit-Eroeffnung-der-Elbphilharmonie.html" target='_blank' rel='noopener noreferrer' className='text-blue-600 underline' >
                            https://www.welt.de/regionales/hamburg/article169646409/Das-groesste-kulturelle-Ereignis-seit-Eroeffnung-der-Elbphilharmonie.html
                        </a>
                    </>
                } />
                <NewsComponent title={'Hochschule für Musik und Theater Hamburg Reopens with Renovated Campus'} date={'15.10.2017'} description={
                    <>
                        Elmar Lampson discusses the reopening of the Hochschule für Musik und Theater Hamburg’s renovated campus, highlighting new initiatives like the “Stage_2.0: Alsterphilharmonie” project, which focuses on developing interactive performance spaces and fostering international collaborations to position the institution as a leader in innovative music and theatre education.{" "}
                        <a href="https://www.welt.de/regionales/hamburg/article169646409/Das-groesste-kulturelle-Ereignis-seit-Eroeffnung-der-Elbphilharmonie.html" target='_blank' rel='noopener noreferrer' className='text-blue-600 underline' >
                            https://www.welt.de/regionales/hamburg/article169646409/Das-groesste-kulturelle-Ereignis-seit-Eroeffnung-der-Elbphilharmonie.html
                        </a>
                    </>
                } />
                <NewsComponent title={'HfMT Hamburg and Beijing Conservatory Launch Academic Partnership'} date={'30.4.2013'} description={
                    <>
                        The Hochschule für Musik und Theater Hamburg (HfMT) has signed a cooperation agreement with the Central Conservatory of Music in Beijing. The partnership, formalized by Presidents Elmar Lampson and Wang Cizhao at Hamburg City Hall, includes student and faculty exchanges, mutual recognition of coursework, and joint projects.{" "}
                        <a href="https://www.musik-heute.de/4932/hfmt-hamburg-kooperiert-mit-musikhochschule-peking/" target='_blank' rel='noopener noreferrer' className='text-blue-600 underline' >
                            https://www.musik-heute.de/4932/hfmt-hamburg-kooperiert-mit-musikhochschule-peking/
                        </a>
                    </>
                } />
                <NewsComponent title={'“What does a saucer sound like?”'} date={'18.6.2003'} description={
                    <>
                        Elmar Lampson’s innovative approach to music education was profiled in Die Zeit. Professor Lampson challenges his students to rethink how they listen—even using unexpected tools like a cafeteria saucer to sharpen auditory perception. Lampson’s methods reflect his enduring commitment to a deeply experiential and philosophical understanding of music. Read the whole interview here:{" "}
                        <a href="https://www.zeit.de/2003/26/P-Lampson" target='_blank' rel='noopener noreferrer' className='text-blue-600 underline' >
                            https://www.zeit.de/2003/26/P-Lampson
                        </a>
                    </>
                } />
            </section>
            <Footer />
        </div>
    )
}

export default News