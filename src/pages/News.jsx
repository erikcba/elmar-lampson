import React, { useState } from 'react'
import Menu from '../components/Menu'
import vectorNews from '../assets/news-title.png'
import NewsComponent from '../components/NewsComponent'
import Footer from '../components/Footer'
import vector1 from '../assets/Vector.png'
import vector2 from '../assets/vector2.png'
import { Trans, useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import img1 from '../assets/img01.png'
import img2 from '../assets/img02.png'
import img3 from '../assets/img03.png'
import img4 from '../assets/img04.png'
import img5 from '../assets/img05.png'
import img6 from '../assets/img06.png'
import img7 from '../assets/img07.png'
import img8 from '../assets/img08.png'

const News = () => {

    const [isOpen, setIsOpen] = useState(false)
    const newsImages = [img1, img2, img3, img4, img5, img6, img7, img8]
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const { t } = useTranslation()
    const articles = t('pressArticles', { returnObjects: true });

    return (
        <div className='overflow-hidden'>
            <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
            <section id='hero' className='bg-hero-news relative '>
                <img src={vectorNews} className='absolute bottom-25 xl:w-fit w-1/2' alt="" />
                <div className='px-6 xl:px-0 xl:pt-32'>
                    <Navbar menuColor={'white'} theme={'white'} toggleMenu={toggleMenu} bgLang={'bg-white text-black'} bgColor='bg-white mix-blend-lighten text-black' />
                    <div className='container mx-auto'>
                        <h1 className='text-white  text-5xl font-bold absolute bottom-10'>
                            News
                        </h1>
                    </div>
                </div>
            </section>
            <section className='container mx-auto py-16 flex flex-col gap-16 relative xl:px-0 px-6'>
                <div className='h-full md:block hidden'>
                    <img className='absolute top-5 -left-1/7 -rotate-1 ' src={vector1} alt="" />
                    <img className='absolute top-0 -left-1/12 h-full w-1/12 -translate-x-9' src={vector2} alt="" />
                </div>

                {articles.map((article, index) => (
                    <div key={index} className="flex xl:flex-row flex-col items-start gap-10 justify-start">
                        <div className='h-52 w-80 md:shrink-0'>
                            <img src={newsImages[index % newsImages.length]} alt="" />
                        </div>
                        <div className='flex flex-col w-full gap-2'>
                            <h2 className="font-bold text-xl">{article.title}</h2>
                            <div className='flex flex-col gap-2'>
                                <p className='font-bold text-md xl:text-xl text-sky-700'>
                                    {article.date}
                                </p>
                                <p className='font-light text-md xl:text-xl '>
                                    <Trans i18nKey={article.summary} components={[
                                        <a key="0" href={article.link1} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-words" />,
                                        <a key="1" href={article.link2} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-words"  />,
                                        <a key="2" href={article.link3} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-words"/>,
                                        <a key="3" href={article.link4} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-words"/>,
                                    ]} >

                                    </Trans>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                ))}

                {/* <NewsComponent image={img1} title={'The Reviews Are In! '} date={'4.06.2025'} description={<>
                    The premiere of Elmar Lampson’s newest opera, Wellen, was warmly received by both critics and audiences. Reviewers praised the “iridescent score” (Andreas Schnell, Kreiszeitung{" "}
                    <a href="https://www.kreiszeitung.de/kultur/der-untergang-wellen-in-bremen-93755869.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-words ">
                        https://www.kreiszeitung.de/kultur/der-untergang-wellen-in-bremen-93755869.html
                    </a>{" "}
                    with “passages of unearthly beauty” (Wolfgang Denker, Der Opernfreund{" "}
                    <a href="https://deropernfreund.de/theater-bremen/bremen-wellen-elmar-lampson/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-words">
                        https://deropernfreund.de/theater-bremen/bremen-wellen-elmar-lampson/
                    </a>
                    ). “Elmar Lampson’s music remains constantly in flow, carrying the action forward” (Christine Gorny, Bremen Zwei,{" "}
                    <a href="https://www.bremenzwei.de/themen/oper-wellen-theater-bremen-100.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-words">
                        https://www.bremenzwei.de/themen/oper-wellen-theater-bremen-100.html
                    </a>
                    )—“Lampson’s music holds nothing back: it moves between wild and tender, between major and minor, with numerous pentatonic touches and hugely demanding ensemble sections. . . . it repeatedly manages to create completely unexpected constellations and confrontations. The percussion formations positioned on both sides of the stage are thrilling” (Ute Schalz-Laurenze Neue Musikzeitung).
                    The opera is playing at Theater Bremen until June 18—get your tickets here so you don’t miss out!{" "}
                    <a href="https://www.theaterbremen.de/de_DE/programm/wellen.1303395#events" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-words">
                        https://www.theaterbremen.de/de_DE/programm/wellen.1303395#events
                    </a>
                    .
                </>} />
                <NewsComponent image={img2} title={'For Elmar Lampson, Composing Doesn’t Feel Like Work'} date={'23.05.2025'} description={
                    <>
                        The composer delves into his most recent opera in an exclusive interview for Bremen Zwei.{" "}
                        <a href="https://www.bremenzwei.de/audios/elmar-lampson-komponist-wellen-oper-theater-bremen-100.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-words">
                            https://www.bremenzwei.de/audios/elmar-lampson-komponist-wellen-oper-theater-bremen-100.html
                        </a>
                    </>
                } />
                <NewsComponent image={img3} title={'Waves to Receive Its World Premiere at Theater Bremen'} date={'20.05.2025'} description={
                    <>
                        Elmar Lampson's new opera, with a libretto by Julia Spinola based on Eduard von Keyserling’s novel, premieres at Theater am Goetheplatz in Bremen—the venue that commissioned the work. The production runs from May 24 to June 18, directed by Philipp Rosendahl with musical direction by Yoel Gamzou. Set in a Baltic Sea resort on the eve of World War I, Waves explores the collapse of utopian ideals through Keyserling’s ironic lens of social critique. Check out the programme at Theater Bremen’s website. {" "}
                        <a href="http://www.theaterbremen.de/de_DE/programm/wellen.1303395#events" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-words" >
                            https://www.theaterbremen.de/de_DE/programm/wellen.1303395#events
                        </a>
                    </>
                } />
                <NewsComponent image={img4} title={'SZSO to Premiere Elmar Lampson’s Work'} date={'23.10.2024'} description={
                    <>
                        The Shenzhen Symphony Orchestra, under the baton of Lin Daye, will premiere Elmar Lampson’s “Stormy Sea No. 2” at the Shenzhen Concert Hall. This new symphony, commissioned by the orchestra, follows the debut of the first “Stormy Sea” installment in December 2023. While the original piece captured the ocean’s raw power, this sequel explores the introspective emotions of beachgoers at sunrise.{" "}
                        <a href="https://www.eyeshenzhen.com/content/2024-10/23/content_31290169.html" target='_blank' rel='noopener noreferrer' className='text-blue-600 underline break-words' >
                            https://www.eyeshenzhen.com/content/2024-10/23/content_31290169.html
                        </a>
                    </>
                } />
                <NewsComponent image={img5} title={'President of the Hamburg University of Music and Drama Given Ceremonial Farewell'} date={'4.10.2022'} description={
                    <>
                        Professor Elmar Lampson was formally honoured at a ceremony marking the end of his 18-year tenure as President of the Hochschule für Musik und Theater Hamburg (HfMT). Under his leadership since 2004, the university underwent significant transformation, including the establishment of the Jazz Hall and new facilities for the Theatre Academy and the Institute for Culture and Media Management. The farewell event featured tributes from prominent figures such as Kent Nagano and included the premiere of a harp concerto composed for the occasion.{" "}
                        <a href="https://www.welt.de/regionales/hamburg/article169646409/Das-groesste-kulturelle-Ereignis-seit-Eroeffnung-der-Elbphilharmonie.html" target='_blank' rel='noopener noreferrer' className='text-blue-600 underline break-words' >
                            https://www.welt.de/regionales/hamburg/article169646409/Das-groesste-kulturelle-Ereignis-seit-Eroeffnung-der-Elbphilharmonie.html
                        </a>
                    </>
                } />
                <NewsComponent image={img6} title={'Hochschule für Musik und Theater Hamburg Reopens with Renovated Campus'} date={'15.10.2017'} description={
                    <>
                        Elmar Lampson discusses the reopening of the Hochschule für Musik und Theater Hamburg’s renovated campus, highlighting new initiatives like the “Stage_2.0: Alsterphilharmonie” project, which focuses on developing interactive performance spaces and fostering international collaborations to position the institution as a leader in innovative music and theatre education.{" "}
                        <a href="https://www.welt.de/regionales/hamburg/article169646409/Das-groesste-kulturelle-Ereignis-seit-Eroeffnung-der-Elbphilharmonie.html" target='_blank' rel='noopener noreferrer' className='text-blue-600 underline break-words' >
                            https://www.welt.de/regionales/hamburg/article169646409/Das-groesste-kulturelle-Ereignis-seit-Eroeffnung-der-Elbphilharmonie.html
                        </a>
                    </>
                } />
                <NewsComponent image={img7} title={'HfMT Hamburg and Beijing Conservatory Launch Academic Partnership'} date={'30.4.2013'} description={
                    <>
                        The Hochschule für Musik und Theater Hamburg (HfMT) has signed a cooperation agreement with the Central Conservatory of Music in Beijing. The partnership, formalized by Presidents Elmar Lampson and Wang Cizhao at Hamburg City Hall, includes student and faculty exchanges, mutual recognition of coursework, and joint projects.{" "}
                        <a href="https://www.musik-heute.de/4932/hfmt-hamburg-kooperiert-mit-musikhochschule-peking/" target='_blank' rel='noopener noreferrer' className='text-blue-600 underline break-words' >
                            https://www.musik-heute.de/4932/hfmt-hamburg-kooperiert-mit-musikhochschule-peking/
                        </a>
                    </>
                } />
                <NewsComponent image={img8} title={'“What does a saucer sound like?”'} date={'18.6.2003'} description={
                    <>
                        Elmar Lampson’s innovative approach to music education was profiled in Die Zeit. Professor Lampson challenges his students to rethink how they listen—even using unexpected tools like a cafeteria saucer to sharpen auditory perception. Lampson’s methods reflect his enduring commitment to a deeply experiential and philosophical understanding of music. Read the whole interview here:{" "}
                        <a href="https://www.zeit.de/2003/26/P-Lampson" target='_blank' rel='noopener noreferrer' className='text-blue-600 underline break-words' >
                            https://www.zeit.de/2003/26/P-Lampson
                        </a>
                    </>
                } /> */}
            </section>
            <Footer />
        </div>
    )
}

export default News