import React, { useState, useEffect } from 'react'
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

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
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

  return (
    <div className=''>

      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />

      <section id='hero' className='bg-hero bg-hero-mobile xl:pt-16 2xl:pt-32'>
        <div className='container mx-auto px-6 2xl:px-0 '>
          <div className='relative'>
            <Navbar toggleMenu={toggleMenu} bgLang={'bg-white text-black'} bgColor='bg-fuchsia-975 mix-blend-multiply text-white' />
          </div>
        </div>
      </section>
      <section  id='news' className='bg-gray-100' >
        <div className='bg-news bg-news-mobile xl:px-0 px-6 xl:pt-32 pt-12 '>
          <div data-aos="fade-up" className='container flex xl:flex-row flex-col justify-start mx-auto pl-0 xl:pl-12'>
            <div className="relative w-3xs">
              <h1 className='bg-fuchsia-975-80 zilla-slab-regular flex items-center justify-center w-fit h-fit text-gray-300 xl:pb-2 xl:pt-2 py-1 xl:pl-10 pl-4 font-normal xl:text-6xl text-3xl relative z-10'>
                News
              </h1>
              <img
                className=' absolute xl:left-1/2 xl:top-4 left-24 top-5 -translate-x-1/2 mt-[-30px] z-0 xl:w-max w-36 h-16 xl:h-max '
                src={newsVector}
                alt=""
              />
            </div>
            <p className='font-bold xl:text-3xl text-xl xl:w-1/3 w-full text-fuchsia-975 xl:ml-4 ml-0 xl:mt-0 mt-6'>
              Waves <br />
              A new opera by Elmar Lampson
              with a libretto by Julia Spinola after
              Eduard von Keyserling
            </p>
            <Link to="/news" className='group bounce-y-hover font-normal text-2xl text-fuchsia-975 xl:self-center self-end flex flex-row items-center justify-start gap-2 pt-10'>
              <img src={arrowDown} alt="" className=' bounce-y transition-all ease-in-out' />
              <span className=" group-hover:scale-105 transition-all ease-in-out">
                Read more
              </span>
            </Link>
          </div>
        </div>
      </section>
      <div className='overflow-hidden'>
        <section id='about' className='lg:pt-20 bg-gray-100 relative'>
          <div className='container flex flex-row xl:h-[950px] h-fit justify-center items-center mx-auto'>
            <div className='flex md:flex-row flex-col items-start justify-center gap-10 h-full xl:px-0 px-6'>
              <div className='xl:w-1/2 w-full h-full flex flex-col items-center justify-start '>
                <div className='h-1/2 flex flex-col justify-center items-start xl:gap-12 gap-6'>
                  <div>
                    <img src={vector1} alt="" className='sm:block hidden absolute  xl:-top-1/5 xl:left-1/6 left-2/8 opacity-65 z-10' />
                    <img src={vector2} alt="" className='sm:block hidden absolute  xl:-top-1/5 xl:left-1/7 left-1/5 opacity-65 z-10' />
                  </div>
                  <h1 data-aos="fade-up"  className='bg-fuchsia-975-80 text-gray-100 zilla-slab-regular font-normal xl:text-6xl text-3xl xl:ml-16 w-fit pl-4 xl:pt-3 pr-2 xl:pb-2 py-1 z-10'>
                    About
                  </h1>
                  <p data-aos="fade-up"  className='md:text-3xl text-xl font-light z-20'>
                    Born in Koblenz, Germany, Elmar Lampson is a renowned
                    composer, conductor, and music educator.
                  </p>
                </div>
                <div className='sm:block hidden sm:h-1/2 ml-auto '>
                  <Link to="/about" className='flex flex-row group bounce-y-hover justify-center items-start gap-2 text-2xl font-normal text-gray-900'>
                    <span className=" group-hover:scale-105 transition-all ease-in-out">
                      Read more
                    </span>
                    <img className='h-fit bounce-y' src={arrowDown} alt="" />
                  </Link>
                </div>
              </div>
              <div data-aos="fade-left"  className='tilt xl:w-1/2 w-full xl:h-[870px] h-[600px] overflow-hidden xl:py-24 py-0 xl:px-12 px-0 z-30'>
                <img className='w-full object-cover scale-140 xl:-translate-y-70 -translate-y-30 xl:-translate-x-20 -translate-x-0' src={aboutHomeImg} alt="" />
              </div>
            </div>
          </div>
          <div className='h-fit w-full bg-transparent absolute bottom-1 z-0'>
            <img src={divisor} alt="" className='w-full' />
          </div>
        </section>
        <section id="myMusic" className="py-12 bg-gray-100">
          <div className='container mx-auto flex flex-col justify-center items-center gap-10'>
            <div className='flex lg:flex-row px-6 xl:px-0 flex-col-reverse justify-center items-center gap-10'>
              <div data-aos="fade-right"  className='tilt w-full lg:w-1/2  overflow-hidden'>
                <img src={myMusic} alt="" className='object-cover xl:h-[687px] md:h-[500px] h-[350px] scale-140 z-0' />
              </div>
              <div className='lg:w-1/2 w-full flex flex-col items-start justify-center gap-10'>
                <div data-aos="fade-up"  className='flex flex-col gap-1 relative md:ml-24 xl:ml-32'>
                  <h1 className='bg-fuchsia-975 text-gray-100 zilla-slab-regular font-normal text-4xl xl:text-6xl w-fit py-2 pr-6 leading-none z-10'>
                    My
                  </h1>
                  <div className='md:h-24 h-16 w-24 bg-sky-200/30 z-0 absolute md:top-1/4 md:-left-1/4 left-1/2 top-1/3 '>
                  </div>
                  <h1 className='bg-fuchsia-975 text-gray-100 zilla-slab-regular font-normal text-4xl xl:text-6xl w-fit py-2 px-4 ml-6 leading-none z-10'>
                    Music
                  </h1>
                </div>
                <p data-aos="fade-up"  className='md:text-3xl text-xl font-light w-full z-20'>
                  The extensive catalogue of compositions by Elmar Lampson  includes a wide range of works across various genres, including orchestral works, chamber orchestra and ensemble pieces, chamber music and solo compositions, vocal music, as well as music opera, theatre and stage music.
                </p>
                <Link to="/myMusic" className='flex flex-row text-xl font-normal relative group bounce-x-hover z-20'>
                  <span className='group-hover:scale-105 text-2xl transition-all ease-in-out '>
                    Complete catalogue <br /> of works
                  </span>
                  <img src={arrowRight} alt="" className='w-fit h-fit self-end absolute left-1/2 bottom-1/12 bounce-x transition-all ease-in-out' />
                </Link>
              </div>
            </div>
            <div className='flex xl:flex-row flex-col items-center xl:self-end relative  xl:w-auto w-full'>
              <Link to={"/media"} target='_blank' className='absolute xl:block hidden -left-1/8 cursor-pointer bounce-x-hover group z-20'>
                <p className='text-2xl font-normal group-hover:scale-105 transition-all ease-in-out'>
                  Listen now <br />
                  on your <br />
                  favorite platform
                </p>
                <img src={arrowRight} alt="" className='w-2/3 h-fit self-end absolute left-1/2 bottom-2/5 bounce-x transition-all ease-in-out' />
              </Link>
              <div className='bg-white w-full xl:py-6 py-12 xl:pr-6 px-8 xl:pl-24'>
                <img src={albums} alt="" className='xl:block hidden' />
                <div className='xl:hidden flex flex-col items-center justify-between gap-4 w-3/4 mx-auto relative'>
                  <img src={album1Mobile} alt="" className='w-full h-fit z-20' />
                  <img src={album2Mobile} alt="" className='w-full h-fit z-20' />
                  <Link to={"/media"} target='_blank'className='relative self-start cursor-pointer bounce-x-hover group z-20'>
                    <p className='text-2xl font-normal group-hover:scale-105 transition-all ease-in-out '>
                      Listen now <br />
                      on your <br />
                      favorite platform
                    </p>
                    <img src={arrowRight} alt="" className='w-2/3 h-fit self-end absolute left-1/2 bottom-2/5 bounce-x transition-all ease-in-out' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section   className='flex'>
          <img data-aos="fade-up" src={imgMusic} alt="" className='z-20' />
        </section>
        <section id='media' className='py-12 bg-gray-100 z-20 relative'>
          <div className='container mx-auto flex flex-col justify-center items-center gap-10 px-6 xl:px-0'>
            <h1 className='bg-fuchsia-975-80 text-gray-100 zilla-slab-regular font-normal xl:text-6xl text-3xl w-fit px-4 py-2 self-start xl:ml-24'>
              Media
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
