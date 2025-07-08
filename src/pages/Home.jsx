import React, { useState, useRef, useEffect } from 'react'
import imgMusic from '../assets/myMusic-img.png'
import arrowDown from '../assets/arrow-down.png'
import newsVector from '../assets/newsFondo.png'
import aboutHomeImg from '../assets/about-home.jpg'
import divisor from '../assets/divisor.png'
import logo from '../assets/logo.png'
import MenuIcon from '../components/icons/MenuIcon'
import vector1 from '../assets/Vector.png'
import vector2 from '../assets/vector2.png'
import myMusic from '../assets/my-music.png'
import arrowRight from '../assets/arrow-right.png'
import albums from '../assets/albums.png'
import img1Media from '../assets/img1-media.jpg'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import VanillaTilt from 'vanilla-tilt'
import ElmarLogo from '../components/ElmarLogo'

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
    <div className='overflow-hidden'>

      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />

      <section id='hero' className='bg-hero'>
        <div className='container mx-auto xl:pt-32'>
          <div className='relative'>
            <img src={logo} alt="" />
            <MenuIcon onClick={toggleMenu} className="absolute left-1/4 top-1/7 cursor-pointer" />
            <span className="absolute left-2/7 top-1/7 text-xl font-bold text-fuchsia-975 bg-white rounded-full py-3 px-2 leading-none cursor-pointer">
              DE
            </span>
          </div>
        </div>
      </section>
      <section id='news' className='bg-gray-100  mt-10' >
        <div className='bg-news pt-32'>
          <div className='container flex flex-row justify-start mx-auto pl-12'>
            <div className="relative w-3xs">
              <h1 className='bg-fuchsia-975-80 zilla-slab-regular flex items-center justify-center w-fit h-fit text-gray-300 pb-2 pt-2 pl-10 font-normal text-6xl relative z-10'>
                News
              </h1>
              <img
                className='absolute left-1/2 top-4 -translate-x-1/2 mt-[-30px] z-0 w-max h-max '
                src={newsVector}
                alt=""
              />
            </div>
            <p className='font-bold text-3xl w-1/3 text-fuchsia-975 ml-4 '>
              Waves <br />
              A new opera by Elmar Lampson
              with a libretto by Julia Spinola after
              Eduard von Keyserling
            </p>
            <a href="" className='font-normal text-2xl text-fuchsia-975 self-center flex flex-row items-center justify-start gap-2 pt-10'>
              <img src={arrowDown} alt="" />
              Read more
            </a>
          </div>
        </div>
      </section>
      <section id='about' className='pt-20 bg-gray-100 relative'>
        <div className='container flex flex-row h-[950px] justify-center items-center mx-auto'>
          <div className='flex flex-row items-start justify-center gap-10 h-full'>
            <div className='w-1/2 h-full flex flex-col items-center justify-start gap-16'>
              <div className='h-1/2 flex flex-col justify-center items-start gap-12'>
                <div>
                  <img src={vector1} alt="" className='absolute -top-1/5 left-1/6 opacity-65 z-10' />
                  <img src={vector2} alt="" className='absolute -top-1/5 left-1/7 opacity-65 z-10' />
                </div>
                <h1 className='bg-fuchsia-975-80 text-gray-100 zilla-slab-regular font-normal text-6xl ml-16 w-fit pl-4 pt-3 pr-2 pb-2 z-10'>
                  About
                </h1>
                <p className='text-3xl font-light z-10'>
                  Born in Koblenz, Germany, Elmar Lampson is a renowned
                  composer, conductor, and music educator.
                </p>
              </div>
              <div className='h-1/2 ml-auto flex flex-row justify-center items-start gap-2'>
                <a href="" className='text-2xl font-normal text-gray-900'>Read more</a>
                <img className='h-fit' src={arrowDown} alt="" />
              </div>
            </div>
            <div className='tilt w-1/2 h-[870px] overflow-hidden py-24 px-12 z-10'>
              <img className='w-full object-cover scale-140 -translate-y-70 -translate-x-20' src={aboutHomeImg} alt="" />
            </div>
          </div>
        </div>
        <div className='h-fit w-full bg-transparent absolute bottom-1 z-0'>
          <img src={divisor} alt="" className='w-full' />
        </div>
      </section>
      <section id="myMusic" className="py-12 bg-gray-100">
        <div className='container mx-auto flex flex-col justify-center items-center gap-10'>
          <div className='flex flex-row justify-center items-center gap-10'>
            <div className='tilt w-5/9 h-[687px] overflow-hidden'>
              <img src={myMusic} alt="" className='object-cover scale-140 z-0' />
            </div>
            <div className='w-4/9 flex flex-col items-start justify-center gap-10'>
              <div className='flex flex-col gap-1 relative xl:ml-32'>
                <h1 className='bg-fuchsia-975 text-gray-100 zilla-slab-regular font-normal text-6xl w-fit py-2 pr-6 leading-none z-10'>
                  My
                </h1>
                <div className='h-24 w-24 bg-sky-200/30 z-0 absolute top-1/4 -left-1/4'>

                </div>
                <h1 className='bg-fuchsia-975 text-gray-100 zilla-slab-regular font-normal text-6xl w-fit py-2 px-4 ml-6 leading-none z-10'>
                  Music
                </h1>
              </div>
              <p className='text-3xl font-light w-full'>
                The extensive catalogue of compositions by Elmar Lampson  includes a wide range of works across various genres, including orchestral works, chamber orchestra and ensemble pieces, chamber music and solo compositions, vocal music, as well as music opera, theatre and stage music.
              </p>
              <a href="" className='flex flex-row text-xl font-normal relative'>
                Complete catalogue <br /> of works
                <img src={arrowRight} alt="" className='w-fit h-fit self-end absolute left-1/2 bottom-1/12' />
              </a>
            </div>
          </div>
          <div className='flex flex-row items-center self-end relative'>
            <div className='absolute -left-1/8 cursor-pointer'>
              <p className='text-2xl font-normal'>
                Listen now <br />
                on your <br />
                favorite platform
              </p>
              <img src={arrowRight} alt="" className='w-2/3 h-fit self-end absolute left-1/2 bottom-2/5' />
            </div>
            <div className='bg-white py-6 pr-6 pl-24'>
              <img src={albums} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='flex'>
        <img src={imgMusic} alt="" className='z-20' />
      </section>
      <section id='media' className='py-12 bg-gray-100 z-20 relative'>
        <div className='container mx-auto flex flex-col justify-center items-center gap-10'>
          <h1 className='bg-fuchsia-975-80 text-gray-100 zilla-slab-regular font-normal text-6xl w-fit px-4 py-2 self-start ml-24'>
            Media
          </h1>
          <img src={img1Media} alt="" />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
