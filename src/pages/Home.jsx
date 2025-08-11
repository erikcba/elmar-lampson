import React, { useState, useEffect, useRef } from 'react'
import imgMusic from '../assets/myMusic-img.png'
import arrowDown from '../assets/arrow-down.png'
import newsVector from '../assets/newsFondo.png'
import aboutHomeImg from '../assets/about-home.jpg'
import divisor from '../assets/divisor.png'
import vector1 from '../assets/Vector.png'
import vector2 from '../assets/vector2.png'
import myMusic from '../assets/my-music.png'
import arrowRight from '../assets/arrow-right.png'
import albums from '../assets/albums.png'
import album1Mobile from '../assets/albums1-mobile.png'
import album2Mobile from '../assets/albums2-mobile.png'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import VanillaTilt from 'vanilla-tilt'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CarouselHome from '../components/Carousel'
import { Trans, useTranslation } from 'react-i18next'
import i18n from '../i18n'
import video from '../assets/video.mp4'
import PlayIcon from '../components/icons/PlayIcon'
import CloseWhite from '../components/icons/CloseWhite'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const { t } = useTranslation()
  const currentLang = i18n.language

  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const startVideo = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  const closeVideo = () => {
    setIsPlaying(false);
    videoRef.current?.pause();
    videoRef.current.currentTime = 0; // opcional, reinicia el video
  }

  useEffect(() => {
    const tiltElements = document.querySelectorAll('.tilt')
    VanillaTilt.init(tiltElements, {
      max: 5,
      speed: 800,
      scale: 1.02,
      glare: true,
      "max-glare": 0.2,
    });
  }, [])

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play();
    }
  }, [isPlaying])

  return (
    <div className=''>

      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />

      <section id='hero' className='bg-hero bg-hero-mobile xl:pt-16 2xl:pt-32'>
        <div className='container mx-auto px-6 2xl:px-0 xl:px-20 '>
          <div className='relative'>
            <Navbar toggleMenu={toggleMenu} bgLang={'bg-white text-black'} bgColor='bg-fuchsia-975 mix-blend-multiply text-white' />
          </div>
        </div>
      </section>
      <section id='news' className='bg-gray-100' >
        <div className='bg-news bg-news-mobile xl:px-0 px-6 xl:pt-32 pt-12 '>
          <div data-aos="fade-up" className='container flex xl:flex-row flex-col justify-start mx-auto pl-0 xl:pl-12'>
            <div className="relative w-3xs">
              <h1 className={`bg-fuchsia-975-80 zilla-slab-regular flex items-center  justify-center w-fit h-fit text-gray-300 xl:pb-2 xl:pt-2 py-1 xl:pl-10 pl-4 font-normal xl:text-6xl text-3xl relative z-10`}>
                {t('news')}
              </h1>
              <img
                className=' absolute xl:left-1/2 xl:top-4 left-24 top-5 -translate-x-1/2 mt-[-30px] z-0 xl:w-max w-36 h-16 xl:h-max '
                src={newsVector}
                alt=""
              />
            </div>
            <p className={`font-bold xl:text-2xl 2xl:text-3xl text-xl xl:w-1/3 w-full text-fuchsia-975  ${currentLang === 'en' ? 'xl:ml-5' : 'xl:ml-12'} xl:mt-0 mt-6`}>
              <Trans i18nKey={'wavesHome'} components={[
                <br key="0" />
              ]} />
            </p>
            <Link to="/news" className='group bounce-y-hover font-normal text-2xl text-fuchsia-975 xl:self-center self-end flex flex-row items-center justify-start gap-2 pt-10'>
              <img src={arrowDown} alt="" className=' bounce-y transition-all ease-in-out' />
              <span className=" group-hover:scale-105 transition-all ease-in-out">
                {t('readMore')}
              </span>
            </Link>
          </div>
        </div>
      </section>
      <div className='overflow-hidden'>
        <section id='about' className='lg:pt-20 bg-gray-100 relative '>
          <div className='container flex flex-row 2xl:h-[950px] h-fit justify-center items-center mx-auto 2xl:py-0 py-20'>
            <div className='flex md:flex-row flex-col items-start justify-center gap-10 h-full xl:px-0 px-6'>
              <div className='xl:w-1/2 w-full h-full flex flex-col items-center justify-start '>
                <div className='h-1/2 flex flex-col justify-center items-start xl:gap-12 gap-6'>
                  <div>
                    <img src={vector1} alt="" className='sm:block hidden absolute  xl:-top-1/5 xl:left-1/6 left-2/8 opacity-65 z-10' />
                    <img src={vector2} alt="" className='sm:block hidden absolute  xl:-top-1/5 xl:left-1/7 left-1/5 opacity-65 z-10' />
                  </div>
                  <div className='xl:pl-20 2xl:pl-0 z-20'>
                    <h1 data-aos="fade-up" className='bg-fuchsia-975-80 text-gray-100 zilla-slab-regular font-normal 2xl:text-6xl text-4xl xl:ml-16 w-fit pl-4 xl:pt-3 pr-2 pb-2 mb-4 py-1 z-10'>
                      {t('about')}
                    </h1>
                    <p data-aos="fade-up" className='xl:text-xl 2xl:text-3xl 2xl:pb-0 pb-6 text-xl font-light z-20'>
                      {t('aboutText')}
                    </p>
                  </div>
                </div>
                <div className='sm:block hidden sm:h-1/2 ml-auto '>
                  <Link to="/about" className='flex flex-row group bounce-y-hover justify-center items-start gap-2 text-2xl font-normal text-gray-900'>
                    <span className=" group-hover:scale-105 transition-all ease-in-out">
                      {t('readMore')}
                    </span>
                    <img className='h-fit bounce-y' src={arrowDown} alt="" />
                  </Link>
                </div>
              </div>
              <div data-aos="fade-left" className='tilt xl:w-1/2 w-full 2xl:h-[870px] h-[600px] overflow-hidden xl:py-24 py-0 xl:px-12 px-0 z-30 xl:pr-20 2xl:pr-0'>
                <img className='w-full object-cover 2xl:scale-140 scale-120 xl:-translate-y-70 -translate-y-30 xl:-translate-x-20 -translate-x-0' src={aboutHomeImg} alt="" />
              </div>
            </div>
          </div>
          <div className='h-fit w-full bg-transparent absolute bottom-1 z-0'>
            <img src={divisor} alt="" className='w-full' />
          </div>
        </section>
        <section id="myMusic" className="py-12 bg-gray-100 xl:px-20 2xl:px-0">
          <div className='container mx-auto flex flex-col justify-center items-center gap-10'>
            <div className='flex lg:flex-row px-6 xl:px-0 flex-col-reverse justify-center items-center gap-10'>
              <div data-aos="fade-right" className='tilt w-full lg:w-1/2  overflow-hidden'>
                <img src={myMusic} alt="" className='object-cover 2xl:h-[687px] md:h-[500px] h-[350px] scale-140 z-0' />
              </div>
              <div className='lg:w-1/2 w-full flex flex-col items-start justify-center gap-10'>
                <div data-aos="fade-up" className='flex flex-col gap-1 relative md:ml-24 xl:ml-32'>
                  <h1 className='bg-fuchsia-975 text-gray-100 zilla-slab-regular font-normal text-4xl 2xl:text-6xl w-fit py-2 pr-6 leading-none z-10'>
                    {t('my')}
                  </h1>
                  <div className='md:h-24 h-16 w-24 bg-sky-200/30 z-0 absolute md:top-1/4 md:-left-1/4 left-1/2 top-1/3 '>
                  </div>
                  <h1 className='bg-fuchsia-975 text-gray-100 zilla-slab-regular font-normal text-4xl 2xl:text-6xl w-fit py-2 px-4 ml-6 leading-none z-10'>
                    {t('music')}
                  </h1>
                </div>
                <p data-aos="fade-up" className='xl:text-xl 2xl:text-3xl text-xl font-light w-full z-20'>
                  {t('myMusicText')}
                </p>
                <Link to="/myMusic" className='flex flex-row text-xl font-normal relative group bounce-x-hover z-20'>
                  <span className='group-hover:scale-105 text-2xl transition-all ease-in-out '>
                    <Trans i18nKey={'musicMore'} components={[
                      <br key="0" />
                    ]} />

                  </span>
                  <img src={arrowRight} alt="" className={`w-fit h-fit self-end absolute left-1/2  ${currentLang == 'en' ? 'bottom-1/12' : '-bottom-5 '} bounce-x transition-all ease-in-out`} />
                </Link>
              </div>
            </div>
            <div className='flex xl:flex-row flex-col items-center xl:self-end relative  xl:w-auto w-full'>
              <Link to={"/media"} target='_blank' className='absolute xl:block hidden -left-1/8 cursor-pointer bounce-x-hover group z-20'>
                <p className='text-2xl font-normal group-hover:scale-105 transition-all ease-in-out'>
                  <Trans i18nKey={'listen'} components={[
                    <br key="0" />
                  ]} />
                </p>
                <img src={arrowRight} alt="" className={`w-2/3 h-fit self-end absolute left-1/2 ${currentLang == 'en' ? 'bottom-2/5' : '-bottom-5 '}  bounce-x transition-all ease-in-out`} />
              </Link>
              <div className='bg-white w-full xl:py-6 py-12 xl:pr-6 px-8 xl:pl-24'>
                <img src={albums} alt="" className='xl:block hidden' />
                <div className='xl:hidden flex flex-col items-center justify-between gap-4 w-3/4 mx-auto relative'>
                  <img src={album1Mobile} alt="" className='w-full h-fit z-20' />
                  <img src={album2Mobile} alt="" className='w-full h-fit z-20' />
                  <Link to={"/media"} target='_blank' className='relative self-start cursor-pointer bounce-x-hover group z-20'>
                    <p className='text-2xl font-normal group-hover:scale-105 transition-all ease-in-out '>
                      <Trans i18nKey={'listen'} components={[
                        <br key="0" />
                      ]} />
                    </p>
                    <img src={arrowRight} alt="" className={`w-2/3 h-fit self-end absolute left-1/2 ${currentLang == 'en' ? 'bottom-2/5' : '-bottom-5 '} bounce-x transition-all ease-in-out `} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='flex relative'>
          {!isPlaying && (
            <>
              <img
                data-aos="fade-up"
                src={imgMusic}
                alt=""
                className="z-30 cursor-pointer "
                onClick={startVideo}
              />
              <PlayIcon
                data-aos="fade-up"
                onClick={startVideo}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 z-40 text-white cursor-pointer"
              />
            </>
          )}

          {isPlaying && (
            <div className='h-svh w-full bg-black/90 flex items-center justify-center z-30'>
              <div className=' flex items-center justify-center h-[80vh] px-6 2xl:px-0'>
                <video
                  ref={videoRef}
                  autoPlay
                  controls
                  className="z-20 w-full h-fit lg:h-11/12 2xl:w-full 2xl:h-full object-fill 2xl:object-cover relative"
                  src={video}
                />
                <CloseWhite
                  onClick={closeVideo}
                  className={"absolute top-10 lg:right-20 xl:right-68 2xl:right-20 w-10 h-10 z-50 text-white hover:scale-75 hover:rotate-180 duration-500 transition-all ease-in-out cursor-pointer"}
                />
              </div>
            </div>
          )}
        </section>
        <section id='media' className='py-12 bg-gray-100 z-20 relative'>
          <div className='container mx-auto flex flex-col justify-center items-center gap-10 px-6 xl:px-0 h-full'>
            <h1 className='bg-fuchsia-975-80 text-gray-100 zilla-slab-regular font-normal xl:text-6xl text-3xl w-fit px-4 py-2 self-start xl:ml-24'>
              {t('media')}
            </h1>
            <CarouselHome />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Home
