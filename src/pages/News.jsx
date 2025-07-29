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
            </section>
            <Footer />
        </div>
    )
}

export default News